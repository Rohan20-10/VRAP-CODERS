import {
  SignOutButton, SignInButton, SignedIn, SignedOut, useClerk,
} from "@clerk/clerk-react"
import "./App.css"
import {useState } from "react"
// import Clerk from '@clerk/clerk-js';

// Initialize Clerk with your Clerk publishable key
// const clerk = new Clerk(`​pk_test_YnJpZWYtc2VhZ3VsbC0zLmNsZXJrLmFjY291bnRzLmRldiQ​`);
// await clerk.load();


function App() {
  const { user } = useClerk();
  console.log(user)
  return (
    <div>
      <SignedOut>
        <SignInButton />
        <p>This content is public. Only signed out users can see the SignInButton above this text.</p>
      </SignedOut>
      <SignedIn>
        <SignOutButton signOutCallback={() => redirect('/')} />
        <p></p>
      </SignedIn>
    </div>)
}

export default App
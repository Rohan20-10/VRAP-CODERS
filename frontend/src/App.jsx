import {
  SignOutButton, 
  SignInButton, 
  SignedIn, 
  SignedOut, 
  useClerk,
} from "@clerk/clerk-react";
import "./App.css";
import { useState } from "react";
import { Link, BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserProfile from "../components/UserProfile";
import HomeMap from "../components/HomeMap";


function App() {
  const { user } = useClerk();

  return (
    <Router> {/* Ensure Router wraps around your entire application */}
      <div>
        <h1>Welcome</h1>
        <Link to="/userprofile">
          <button>Go to user profile</button>
        </Link>
        <Link to="/map">
          <button>Go to map</button>
        </Link>

        {/* Routes should be defined inside the <Routes> component */}
        <Routes>
          <Route path="/userprofile" element={<UserProfile />} />
          <Route path="/map" element={<HomeMap />} />
        </Routes>

        {/* Other components such as SignedIn and SignedOut can be used outside the <Routes> */}
        <SignedOut>
          <SignInButton />
          <p>This content is public. Only signed out users can see the SignInButton above this text.</p>
        </SignedOut>
        <SignedIn>
          <SignOutButton signOutCallback={() => navigate('/')} />
          <p></p>
        </SignedIn>
      </div>
    </Router>
  );
}

export default App;

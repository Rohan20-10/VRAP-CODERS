import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Menu from "./components/Menu";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { Maps } from "./pages/Maps";
import { CommunityForum } from "./pages/CommunityForum";

function App() {
  return (
    <div className="app">
      <Router>
        {/* <Menu /> */}
        <Routes>
          <Route path="/SignIn" element={<SignIn />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/" element={<Maps />} />
          {/* <Route path="/LeaderBoard" element={<LeaderBoard />} /> */}
          {/* <Route path="/UserProfile" element={<UserProfile />} /> */}
          <Route path="/CommunityForum" element={<CommunityForum />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Menu = ({ children }) => {
  const navigate = useNavigate();

  const [showIcons, setShowIcons] = useState(false);
  function toggleIcons() {
    setShowIcons(!showIcons);
  }
  
  return (
    <div className="container">
      <div>
        <button
          className="hamburger"
          onClick={toggleIcons}
          style={{ left: showIcons ? "215px" : "0px" }}
        >
          ☰
        </button>
      </div>
      {showIcons && (
        <div
          className="buttons"
          style={{
            transition: "background-color 2s ease",
          }}
        >
          <button
            className="btn"
            onClick={() => {
              navigate("/");
            }}
          >
            Maps
          </button>
          <button
            className="btn"
            onClick={() => {
              navigate("/UserProfile");
            }}
          >
            User Profile
          </button>
          <button
            className="btn"
            onClick={() => {
              navigate("/LeaderBoard");
            }}
          >
            Leaderboard
          </button>

          <button
            className="btn"
            onClick={() => {
              navigate("/Community Forum");
            }}
          >
            Community Forum
          </button>
        </div>
      )}

      {children}
    </div>
  );
};

export default Menu;

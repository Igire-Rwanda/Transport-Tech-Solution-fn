import React from "react";
import { useState, useEffect } from "react";
import "./driveSidebar.css";
import { Link } from "react-router-dom";
const DriverSidebar = () => {
  const [clicked, setClicked] = useState(false);
  const [visible, setvisible] = useState(false);
  const handleClick = () => {
    setClicked(true);
  };
  const linkStyle = {
    textDecoration: "none",
    color: clicked ? "black" : "white",
    backgroundColor: clicked ? "#009AC7" : "#2A4966",
  };

  const [isDarkMode, setIsDarkMode] = useState(false);
  useEffect(() => {
    const theme = localStorage.getItem("theme");
    setIsDarkMode(theme === "dark");
  }, []);
  useEffect(() => {
    const root = document.documentElement;
    root.setAttribute("data-theme", isDarkMode ? "dark" : "light");
    localStorage.setItem("theme", isDarkMode ? "dark" : "light");
  }, [isDarkMode]);

  const handleThemeToggle = () => {
    setIsDarkMode(!isDarkMode);
  };
  return (
    <div className="SIDEBAR">
      <div className="driver-sidebar">
        <div className="logo-admin">
          <h1>
            <Link to="/" style={{ textDecoration: "none", color: "white" }}>
              Bus<span style={{ color: "#009AC7" }}>link</span>
            </Link>
          </h1>
        </div>
        <div className="list-items-driver">
          <ul>
            <li>
              <i class="bx bxs-id-card"></i>{" "}
              <Link
                to="/driverdashboard"
                style={linkStyle}
                onClick={handleClick}
              >
                Driver Dashboard
              </Link>
            </li>

            <li>
              <i class="bx bx-bus"></i>{" "}
              <Link to="/destination" style={linkStyle} onClick={handleClick}>
                Destination Status
              </Link>
            </li>

            <li>
              <i class="bx bxs-id-card"></i>{" "}
              <Link to="/booking" style={linkStyle} onClick={handleClick}>
                Booking Status
              </Link>
            </li>
          </ul>
        </div>
        <div className="line-driver"></div>
        <div className="list-items-driver">
          <ul>
            <li>
              <i class="bx bx-comment-dots"></i>{" "}
              <Link to="#" style={linkStyle} onClick={handleClick}>
                Claims & <br />
                feedback{" "}
              </Link>
            </li>
            <li>
              <i class="bx bx-cog"></i> Settings{" "}
            </li>
            <li>
              <i class="bx bx-phone-call"></i> Help center{" "}
            </li>
          </ul>
        </div>
        <label className="switch-driver">
          <input
            type="checkbox"
            id="themeToggle"
            checked={isDarkMode}
            onChange={handleThemeToggle}
          />
          <span className="slider round"></span>
        </label>
      </div>
    </div>
  );
};

export default DriverSidebar;

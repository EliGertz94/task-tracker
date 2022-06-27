import React from "react";
import { Link } from "react-router-dom";
import Switch from "../components/Switch";
import { FaChevronLeft } from "react-icons/fa";
const AboutPage = ({ darkMode, darkModeHandler }) => {
  return (
    <div className={darkMode ? `container-darkmode` : `container`}>
      <header className="header">
        <Link to="/" style={{ color: "white" }}>
          <FaChevronLeft style={{ color: darkMode ? "white" : "black" }} />
        </Link>
        <h3>Settings</h3>
      </header>
      <header className="header">
        <p>Set Dark Mode</p>
        <Switch isOn={darkMode} handelToggle={darkModeHandler} />
      </header>
    </div>
  );
};

export default AboutPage;

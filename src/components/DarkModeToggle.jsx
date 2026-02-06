import React from "react";
import "./DarkModeToggle.css";

const DarkModeToggle = ({ darkMode, toggleDarkMode }) => {
  return (
    <button
      onClick={toggleDarkMode}
      className={`dark-mode-toggle ${darkMode ? "dark" : "light"}`}
    >
      {darkMode ? "Toggle Light Mode" : "Toggle Dark Mode"}
    </button>
  );
};

export default DarkModeToggle;

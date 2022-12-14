import React, { useState } from "react";
import "../Header.css";
import { FaMoon, FaRegMoon } from "react-icons/fa";

const Header = () => {
  const [mood, setMood] = useState(false);
  const chnageMoodHandler = function () {
    if (!mood) {
      // light mood
      document.body.classList.add("light");
      document.body.classList.remove("dark");
      setMood(true);
    } else if (mood) {
      // dark mood
      document.body.classList.add("dark");
      document.body.classList.remove("light");
      setMood(false);
    }
  };

  return (
    <div className="header">
      <h2>Where in the world?</h2>
      <div className="mood" onClick={chnageMoodHandler}>
        {!mood ? <FaMoon /> : <FaRegMoon />}
        <p>Dark Mood</p>
      </div>
    </div>
  );
};

export default Header;

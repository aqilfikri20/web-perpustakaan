"use client"
import React, { useState, useEffect } from "react";
import "./toggle.css"
const Toggle= (any) => {
    const [theme, setTheme] = useState("light");


    useEffect(() => {
      const savedTheme = localStorage.getItem("theme") || "light";
      setTheme(savedTheme);
      document.documentElement.setAttribute("data-theme", savedTheme);
    }, []);
  
    const handleToggle = () => {
      const newTheme = theme === "light" ? "dark" : "light";
      setTheme(newTheme);
      localStorage.setItem("theme", newTheme);
      document.documentElement.setAttribute("data-theme", newTheme);
    };
    return(
        <>
        <input
          type="checkbox"
          id="toggle_checkbox"
          onChange={handleToggle}
          checked={theme === "dark"}
        />
        <label htmlFor="toggle_checkbox">
          <div id="star">
            <div className="star" id="star-1">★</div>
            <div className="star" id="star-2">★</div>
          </div>
          <div id="moon"></div>
        </label>
      </>
    );

}

export default Toggle;

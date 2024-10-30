import React, { useEffect, useState } from "react";
import "./Header.css";

function Header() {
  const [showModel, setShowModel] = useState(false);
  const [theme, setTheme] = useState(
    localStorage.getItem("currentMode") ?? "dark"
  );

  useEffect(() => {
    document.body.classList.toggle("dark", theme === "dark");
    document.body.classList.toggle("light", theme === "light");
    localStorage.setItem("currentMode", theme);
  }, [theme]);

  return (
    <header className="flex">
      <button
        onClick={() => setShowModel(!showModel)}
        className="menu flex icon-menu"
      />
      <div />
      <nav>
        <ul className="flex">
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="/path/to/your/cv.pdf" download>
              Download CV
            </a>
          </li>
          <li>
            <a href="#contact">Contact Us</a>
          </li>
        </ul>
      </nav>

      <button
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        className="mode flex"
      >
        <span className={theme === "dark" ? "icon-moon-o" : "icon-sun"}></span>
      </button>

      {showModel && (
        <div className="fixed">
          <ul className="model border">
            <li>
              <button
                className="icon-close"
                onClick={() => setShowModel(false)}
              />
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="/path/to/your/cv.pdf" download>
                Download CV
              </a>
            </li>
            <li>
              <a href="#contact">Contact Us</a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}

export default Header;

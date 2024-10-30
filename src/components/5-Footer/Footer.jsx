import React from "react";
import "./Footer.css";
function Footer() {
  return (
    <footer className="flex">
      <ul className="flex">
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
      </ul>
      <p>@Ibrahim Al-shabrawishy</p>
    </footer>
  );
}
export default Footer;

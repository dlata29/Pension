import React from "react";
import "../css/Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <svg width="30" height="30" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <rect width="200" height="200" fill="transparent" />
          <circle cx="100" cy="100" r="80" fill="#589ea6" />
          <circle cx="90" cy="100" r="70" fill="#f2c151" />
          <circle cx="80" cy="100" r="60" fill="#ec903d" />
          <circle cx="70" cy="100" r="50" fill="#db5e4d" />
        </svg>
      </div>

      <ul className="nav-links">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">About us</a>
        </li>
        <li>
          <a href="#">All about Pension</a>
        </li>
        <li>
          <a href="#">Products</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>
    </nav>
  );
}

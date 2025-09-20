import React from "react";
import { Link } from "react-router-dom"; // import Link
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
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/">About us</Link>
        </li>
        <li>
          <Link to="/">All about Pension</Link>
        </li>
        <li>
          <Link to="/">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}

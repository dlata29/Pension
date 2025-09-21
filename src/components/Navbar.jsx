import React, { useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import "../CSS/Navbar.css";

export default function Navbar() {
  const navbarRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (navbarRef.current) {
        navbarRef.current.classList.add("slide-in");
      }
    }, 2000); // Slide down after 2 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="navbar-wrapper" ref={navbarRef}>
      <nav className="navbar">
        <div className="navbar-left">
          <div className="logo">
            <img src="/logo.png" alt="Harp & Code Logo" className="logo-img" />
            <span>Harp & Code</span>
          </div>
        </div>

        <ul className="nav-links">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/features">Features</NavLink>
          </li>
          <li>
            <NavLink to="/pricing">Pricing</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
        </ul>

        <div className="navbar-right">
          <button className="btn-secondary">Join Waitlist</button>
          <button className="btn-primary">Contact Us</button>
        </div>
      </nav>
    </div>
  );
}

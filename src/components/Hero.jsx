import React, { useState, useEffect } from "react";
import "../css/Hero.css";
import Navbar from "./Navbar";

export default function Hero() {
  const [showNav, setShowNav] = useState(false);
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    // Navbar appears first (after 1s)
    const navTimer = setTimeout(() => setShowNav(true), 1000);

    // Hero text appears after 2s
    const textTimer = setTimeout(() => setShowText(true), 2000);

    return () => {
      clearTimeout(navTimer);
      clearTimeout(textTimer);
    };
  }, []);

  return (
    <section className="hero-section">
      {/* Background Video */}
      <video className="hero-video" src="/videos/HarpSharp.mp4" autoPlay muted />

      {/* Overlay (contains navbar + text) */}
      <div className="hero-overlay left-align">
        {/* Navbar with fade-in */}
        <div className={`fade-in ${showNav ? "visible" : "hidden"}`}>
          <Navbar />
        </div>

        {/* Hero Text with fade-in */}
        <div className={`hero-content ${showText ? "visible" : "hidden"}`}>
          <h1>Welcome to UN Project</h1>
          <p>Your tagline or mission statement goes here</p>
          <button>Get Started</button>
        </div>
      </div>
    </section>
  );
}

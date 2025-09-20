import React, { useState, useEffect } from "react";
import "../css/Hero.css";

export default function Hero() {
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowText(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="hero-section">
      {/* Background Video */}
      <video className="hero-video" src="/videos/HarpSharp.mp4" autoPlay muted />

      {/* Overlay Text */}
      <div className={`hero-content ${showText ? "visible" : "hidden"}`}>
        <h1>Welcome to UN Project</h1>
        <p>Your tagline or mission statement goes here</p>
        <button>Get Started</button>
      </div>
    </section>
  );
}

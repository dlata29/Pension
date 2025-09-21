import React from "react";
import "../CSS/Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      {/* Logo / Brand */}
      <div className="footer-brand">
        <h3>Harp & Code</h3>
        <p>Crafting digital experiences that last</p>
      </div>
      <div className="footer-socials">
        <a href="#" aria-label="Twitter">
          🐦 Twitter
        </a>
        <a href="#" aria-label="LinkedIn">
          🔗 LinkedIn
        </a>
        <a href="#" aria-label="Instagram">
          📸 Instagram
        </a>
      </div>
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Harp & Code. All rights reserved.</p>
      </div>
    </footer>
  );
}

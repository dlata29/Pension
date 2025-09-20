import React, { useState, useEffect } from "react";
import "../css/ProductPage.css";
import Navbar from "./Navbar";

export default function AppDevelopment() {
  const [showNav, setShowNav] = useState(false);
  const [showContent, setShowContent] = useState(false);

  const services = [
    "Mobile Apps (iOS & Android) → Engaging, user-friendly apps that bring your ideas to life.",
    "Cross-Platform Apps → Built once, deployed everywhere with performance and speed.",
    "Prototype to Launch → From clickable mockups to app-store deployment.",
  ];

  useEffect(() => {
    const navTimer = setTimeout(() => setShowNav(true), 1000);
    const contentTimer = setTimeout(() => setShowContent(true), 2000);
    return () => {
      clearTimeout(navTimer);
      clearTimeout(contentTimer);
    };
  }, []);

  return (
    <div className="product-page">
      {/* Hero Section */}
      <section className="product-hero app-dev">
        <div className="hero-overlay">
          {/* Navbar fade-in */}
          <div className={`fade-in navbar-fade ${showNav ? "visible" : "hidden"}`}>
            <Navbar />
          </div>

          {/* Hero Content fade-in */}
          <div className={`hero-content ${showContent ? "visible" : "hidden"}`}>
            <h1>App Development Services</h1>
            <p>
              Create interactive, high-quality apps for iOS, Android, and cross-platform solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="product-services">
        {services.map((service, idx) => (
          <div key={idx} className="service-card">
            <p>{service}</p>
          </div>
        ))}
      </section>
    </div>
  );
}

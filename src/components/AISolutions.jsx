import React, { useState, useEffect } from "react";
import "../css/ProductPage.css";
import Navbar from "./Navbar";

export default function AISolutions() {
  const [showNav, setShowNav] = useState(false);
  const [showContent, setShowContent] = useState(false);

  const services = [
    "AI Agents → Intelligent digital assistants for business workflows.",
    "Process Automation → Streamline repetitive tasks with smart AI tools.",
    "Data-Driven Insights → Predictive models and dashboards to power decision-making.",
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
      <section className="product-hero ai-solutions">
        <div className="hero-overlay">
          {/* Navbar fade-in */}
          <div className={`fade-in navbar-fade ${showNav ? "visible" : "hidden"}`}>
            <Navbar />
          </div>

          {/* Hero Content fade-in */}
          <div className={`hero-content ${showContent ? "visible" : "hidden"}`}>
            <h1>AI Solutions</h1>
            <p>
              Leverage AI to automate, optimize, and gain insights that drive smarter business
              decisions.
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

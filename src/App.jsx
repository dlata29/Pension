import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useState, useEffect, useRef } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Products from "./components/Products";
import WebDevelopment from "./components/WebDevelopment";
import AppDevelopment from "./components/AppDevelopment";
import AISolutions from "./components/AISolutions";

export default function App() {
  const [isNavbarVisible, setNavbarVisible] = useState(false);
  const productsSectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // If the section is intersecting (visible on screen)
        if (entry.isIntersecting) {
          setNavbarVisible(true);
        }
        // If we scroll back up and the section is completely above the viewport
        else if (entry.boundingClientRect.top > 0) {
          setNavbarVisible(false);
        }
      },
      {
        // A threshold of 0 triggers as soon as the first pixel is visible
        threshold: 0.5,
      }
    );

    const currentRef = productsSectionRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <Router>
      {/* 1. The Navbar is now here, at the top level */}
      <Navbar isVisible={isNavbarVisible} />

      <div>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                {/* 2. Pass the ref to the Products component */}
                <Products ref={productsSectionRef} />
                <About />
              </>
            }
          />
          <Route path="/products/web-development" element={<WebDevelopment />} />
          <Route path="/products/app-development" element={<AppDevelopment />} />
          <Route path="/products/ai-solutions" element={<AISolutions />} />
        </Routes>
      </div>
    </Router>
  );
}

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useState, useEffect, useRef } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Products from "./components/Products";
import WebDevelopment from "./components/WebDevelopment";
import AppDevelopment from "./components/AppDevelopment";
import AISolutions from "./components/AISolutions";
import Footer from "./components/Footer";

export default function App() {
  const [isNavbarVisible, setNavbarVisible] = useState(false);
  const productsSectionRef = useRef(null);

  // Video end callback
  const handleVideoEnd = () => {
    setNavbarVisible(true);
  };

  // Scroll observer
  useEffect(() => {
    if (!productsSectionRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setNavbarVisible(true);
        } else if (entry.boundingClientRect.top > 0) {
          setNavbarVisible(false);
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(productsSectionRef.current);

    return () => {
      if (productsSectionRef.current) {
        observer.unobserve(productsSectionRef.current);
      }
    };
  }, [productsSectionRef]);

  return (
    <Router>
      <Navbar isVisible={isNavbarVisible} />

      <div>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero onVideoEnd={handleVideoEnd} />
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
      <Footer />
    </Router>
  );
}

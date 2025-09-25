import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Products from "./components/Products";
import WebDevelopment from "./components/WebDevelopment";
import AppDevelopment from "./components/AppDevelopment";
import AISolutions from "./components/AISolutions";
import Footer from "./components/Footer";
import OurProducts from "./components/OurProducts";

export default function App() {
  return (
    <Router>
      <Navbar />

      <div>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <Products />
                <About />
                <OurProducts />
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

import React from "react";
import ProductCard from "./ProductCard"; // Import the new component
import "../CSS/Products.css";

const productData = [
  {
    title: "Web Development",
    tagline: "Responsive, SEO-friendly sites tailored for your brand.",
    link: "/products/web-development",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round">
        <path d="m18 16 4-4-4-4" />
        <path d="m6 8-4 4 4 4" />
        <path d="m14.5 4-5 16" />
      </svg>
    ),
  },
  {
    title: "App Development",
    tagline: "Engaging, user-friendly apps that bring your ideas to life.",
    link: "/products/app-development",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round">
        <rect width="14" height="20" x="5" y="2" rx="2" ry="2" />
        <path d="M12 18h.01" />
      </svg>
    ),
  },
  {
    title: "AI Solutions",
    tagline: "Intelligent digital assistants for your business workflows.",
    link: "/products/ai-solutions",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round">
        <path d="M12 8V4H8" />
        <rect width="16" height="12" x="4" y="8" rx="2" />
        <path d="M2 14h2" />
        <path d="M20 14h2" />
        <path d="M15 13v2" />
        <path d="M9 13v2" />
      </svg>
    ),
  },
];

export default function Products() {
  return (
    <section className="products-section">
      <div className="products-header">
        <span className="services-tag">SERVICES</span>
        <h2 className="section-title">Lets craft something lasting — something that sings.</h2>
      </div>
      <div className="products-grid">
        {productData.map((product) => (
          <ProductCard
            key={product.title}
            title={product.title}
            link={product.link}
            tagline={product.tagline}
            icon={product.icon}
          />
        ))}
      </div>
    </section>
  );
}

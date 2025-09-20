import { Link } from "react-router-dom";
import "../css/Products.css";

const productData = [
  {
    title: "Web Development",
    description: [
      "Custom Websites → Responsive, SEO-friendly sites tailored for your brand.",
      "E-commerce Platforms → Scalable online stores with secure payment integrations.",
      "WordPress & CMS Solutions → Easy-to-manage content platforms for blogs, portfolios, and enterprises.",
    ],
    link: "/products/web-development",
  },
  {
    title: "App Development",
    description: [
      "Mobile Apps (iOS & Android) → Engaging, user-friendly apps that bring your ideas to life.",
      "Cross-Platform Apps → Built once, deployed everywhere with performance and speed.",
      "Prototype to Launch → From clickable mockups to app-store deployment.",
    ],
    link: "/products/app-development",
  },
  {
    title: "AI Solutions",
    description: [
      "AI Agents → Intelligent digital assistants for business workflows.",
      "Process Automation → Streamline repetitive tasks with smart AI tools.",
      "Data-Driven Insights → Predictive models and dashboards to power decision-making.",
    ],
    link: "/products/ai-solutions",
  },
];

export default function Products() {
  return (
    <section className="products-section">
      <h2 className="section-title">Our Products</h2>
      <div className="products-grid">
        {productData.map((product) => (
          <Link key={product.title} to={product.link} className="product-card">
            <h3>{product.title}</h3>
            <ul>
              {product.description.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
            <span className="learn-more">Learn More →</span>
          </Link>
        ))}
      </div>
    </section>
  );
}

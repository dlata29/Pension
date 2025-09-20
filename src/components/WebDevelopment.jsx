import "../css/ProductPage.css";

export default function WebDevelopment() {
  const services = [
    "Custom Websites → Responsive, SEO-friendly sites tailored for your brand.",
    "E-commerce Platforms → Scalable online stores with secure payment integrations.",
    "WordPress & CMS Solutions → Easy-to-manage content platforms for blogs, portfolios, and enterprises.",
  ];

  return (
    <div className="product-page">
      <header className="product-hero web-dev">
        <h1>Web Development Services</h1>
        <p>Build modern, responsive, and high-performing websites that scale with your business.</p>
      </header>

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

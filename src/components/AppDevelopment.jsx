import "../css/ProductPage.css";

export default function AppDevelopment() {
  const services = [
    "Mobile Apps (iOS & Android) → Engaging, user-friendly apps that bring your ideas to life.",
    "Cross-Platform Apps → Built once, deployed everywhere with performance and speed.",
    "Prototype to Launch → From clickable mockups to app-store deployment.",
  ];

  return (
    <div className="product-page">
      <header className="product-hero app-dev">
        <h1>App Development Services</h1>
        <p>Create interactive, high-quality apps for iOS, Android, and cross-platform solutions.</p>
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

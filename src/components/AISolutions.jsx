import "../css/ProductPage.css";

export default function AISolutions() {
  const services = [
    "AI Agents → Intelligent digital assistants for business workflows.",
    "Process Automation → Streamline repetitive tasks with smart AI tools.",
    "Data-Driven Insights → Predictive models and dashboards to power decision-making.",
  ];

  return (
    <div className="product-page">
      <header className="product-hero ai-solutions">
        <h1>AI Solutions</h1>
        <p>
          Leverage AI to automate, optimize, and gain insights that drive smarter business
          decisions.
        </p>
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

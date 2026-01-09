import SectionTitle from "./SectionTitle.jsx";

export default function TechStack({ id, items }) {
  return (
    <section id={id} className="section">
      <SectionTitle>Tecnologias</SectionTitle>

      <div className="techGrid">
        {items.map((t) => (
          <div key={t.name} className="techPill">
            <span className="techName">{t.name}</span>
            <span className="techLevel">{t.level}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

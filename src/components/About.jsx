import SectionTitle from "./SectionTitle.jsx";

export default function About({ id, items }) {
  return (
    <section id={id} className="section">
      <SectionTitle>Sobre mim</SectionTitle>

      <div className="timeline">
        {items.map((it, idx) => (
          <div
            key={`${it.year}-${it.title}`}
            className={"timelineItem " + (idx === items.length - 1 ? "isLast" : "")}
          >
            <div className="timelineTop">
              <span className="timelineYear">{it.year}</span>
              <span className="timelineDot" />
              <span className="timelineLine" />
            </div>

            <h4 className="timelineTitle">{it.title}</h4>
            <p className="timelineText">{it.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default function ProjectCard({ project, onOpen }) {
  return (
    <article className="card">
      <img className="cardImg" src={project.image} alt={project.title} />
      <h3 className="cardTitle">{project.title}</h3>
      <p className="cardText">{project.description}</p>

      <button
        className={"btn btnSmall " + (project.accent === "purple" ? "btnPurple" : "btnCyan")}
        type="button"
        onClick={onOpen}
      >
        {project.buttonLabel}
      </button>
    </article>
  );
}

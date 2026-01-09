import { useEffect, useState } from "react";
import SectionTitle from "./SectionTitle.jsx";
import ProjectCard from "./ProjectCard.jsx";
import ProjectModal from "./ProjectModal.jsx";

export default function Projects({ id, items }) {
  const [open, setOpen] = useState(null);

  // Hook (useEffect): fecha modal com ESC e trava scroll quando aberto 
  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === "Escape") setOpen(null);
    };

    if (open) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", onKeyDown);
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <section id={id} className="section">
      <SectionTitle>Projetos</SectionTitle>

      <div className="projectsGrid">
        {items.map((p) => (
          <ProjectCard key={p.id} project={p} onOpen={() => setOpen(p)} />
        ))}
      </div>

      <ProjectModal project={open} onClose={() => setOpen(null)} />
    </section>
  );
}

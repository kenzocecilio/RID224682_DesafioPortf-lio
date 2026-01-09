import { useEffect } from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";

export default function Header({
  links,
  social,
  activeSection,
  sectionIds,
  onActiveSectionChange,
}) {
  // Hook (useEffect): destaca automaticamente o item do menu conforme a seção visível
  useEffect(() => {
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0))[0];

        if (visible?.target?.id) onActiveSectionChange?.(visible.target.id);
      },
      {
        root: null,
        threshold: [0.15, 0.25, 0.35, 0.5],
        rootMargin: "-20% 0px -55% 0px",
      }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, [sectionIds, onActiveSectionChange]);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    el?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header className="header">
      <div className="headerInner container">
        <nav className="nav">
          {links.map((l) => (
            <button
              key={l.id}
              className={"navLink " + (activeSection === l.id ? "isActive" : "")}
              onClick={() => scrollTo(l.id)}
              type="button"
            >
              {l.label}
            </button>
          ))}
        </nav>

        <div className="headerIcons">
          <a className="iconBtn" href={social.github} target="_blank" rel="noreferrer" aria-label="GitHub">
            <FaGithub />
          </a>
          <a className="iconBtn" href={social.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <FaLinkedinIn />
          </a>
          <a className="iconBtn" href={social.instagram} target="_blank" rel="noreferrer" aria-label="Instagram">
            <FiInstagram />
          </a>
        </div>
      </div>
    </header>
  );
}

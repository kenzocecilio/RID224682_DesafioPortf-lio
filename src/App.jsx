import { useMemo, useState } from "react";
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import Projects from "./components/Projects.jsx";
import TechStack from "./components/TechStack.jsx";
import About from "./components/About.jsx";
import Footer from "./components/Footer.jsx";

import { profile } from "./data/profile.js";
import { projects } from "./data/projects.js";
import { tech } from "./data/tech.js";
import { timeline } from "./data/timeline.js";

export default function App() {
  // Hook (useState): controla qual seção está ativa para destaque no menu
  const [activeSection, setActiveSection] = useState("top");

  const sectionIds = useMemo(() => ["projects", "tech", "about"], []);

  return (
    <div className="page">
      <Header
        activeSection={activeSection}
        sectionIds={sectionIds}
        onActiveSectionChange={setActiveSection}
        links={[
          { id: "projects", label: "Projetos" },
          { id: "tech", label: "Tecnologias" },
          { id: "about", label: "Sobre mim" },
        ]}
        social={profile.social}
      />

      <main className="container">
        <Hero
          id="top"
          title={profile.heroTitle}
          subtitle={profile.heroSubtitle}
          buttonLabel="Saber mais"
          onButtonClick={() => {
            const el = document.getElementById("projects");
            el?.scrollIntoView({ behavior: "smooth", block: "start" });
          }}
        />

        <Projects id="projects" items={projects} />

        <TechStack id="tech" items={tech} />

        <About id="about" items={timeline} />

        <Footer contact={profile.contact} social={profile.social} />
      </main>
    </div>
  );
}

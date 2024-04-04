import React, { useRef } from "react";
import ProjectTile from "../components/projectTile";
import datafile from "../datafile.json";

function Projects() {
  const projectContainerRef = useRef(null);

  const scrollToNext = () => {
    const container = projectContainerRef.current;
    if (container) {
      container.scrollBy({
        left: container.offsetWidth,
        behavior: "smooth",
      });
    }
  };

  const scrollToPrev = () => {
    const container = projectContainerRef.current;
    if (container) {
      container.scrollBy({
        left: -container.offsetWidth,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="projects">
      <h2 className="title highlight">Projects</h2>
      <div className="project-container">
        <button className="back-btn" onClick={scrollToPrev}>
          &larr;
        </button>
        <div className="projects-container" ref={projectContainerRef}>
          {datafile.projects.map((project, index) => (
            <ProjectTile
              title={project.title}
              src={project.src}
              description={project.description}
              link={project.link}
              key={index}
              id={project.id}
            />
          ))}
        </div>
        <button className="forward-btn" onClick={scrollToNext}>
          &rarr;
        </button>
      </div>
    </section>
  );
}

export default Projects;

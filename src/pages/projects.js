import * as Imports from "../assets/importFile";

function Projects() {
  const projectContainerRef = Imports.useRef(null);

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
          {Imports.datafile.projects.map((project, index) => (
            <Imports.ProjectTile
              title={project.title}
              src={project.src}
              description={project.overview}
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

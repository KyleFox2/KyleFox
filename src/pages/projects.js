import ProjectTile from "../components/projectTile";
import datafile from "../datafile.json";

function Projects() {
  return (
    <section id="projects">
      <h2 className="title highlight">Projects</h2>
      <div className="projects-container">
        {datafile.projects.map((project, index) => (
          <ProjectTile
            title={project.title}
            src={project.src}
            description={project.description}
            link={project.link}
            key={index}
          />
        ))}
      </div>
    </section>
  );
}

export default Projects;

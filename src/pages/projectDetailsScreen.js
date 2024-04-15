import * as Imports from "../assets/importFile";

function ProjectsDetailsScreen() {
  const projectId = window.location.pathname.split("/")[2];
  let project;
  let liveSite;

  Imports.datafile.projects.forEach((element) => {
    if (element.id === projectId) project = element;
  });

  if (project.liveSite !== "") {
    liveSite = (
      <Imports.Button
        text={"Live Site"}
        link={project.liveSite}
        className={"viewWorkBtn"}
      />
    );
  }

  return (
    <div>
      <section id="introduction">
        <Imports.Nav />
        <Imports.Socials />
        <div className="intro-wrapper">
          <h1 className="highlight">{project.title}</h1>
          <p className="intro-text">
            This page contains the details of the {project.title} website which
            includes the project description, tools used and any relevant links
            to the project.
          </p>
          <Imports.Button
            text="Github Repo"
            link={project.githubLink}
            className="viewWorkBtn"
          />
        </div>
        <div className="mouse-container">
          <span className="scroll-icon">
            <span className="scroll-icon_dot"></span>
          </span>
        </div>
      </section>
      <section>
        <img
          className="project-img"
          src={process.env.PUBLIC_URL + project.src}
          alt="Portfolio Screenshot"
        />
        <div>
          <p>{project.description1}</p>
          <p>{project.description2}</p>
          <p>{project.description3}</p>
        </div>
        <h3 className="subtle-highlight">Tools</h3>
        <div className="project-skills">
          {project.techStack.map((item, index) => (
            <div key={index} className="skills-items">
              {item}
            </div>
          ))}
        </div>
        <div className="projectDetails-btns">
          <Imports.Button
            text={"Github Repo"}
            link={project.githubLink}
            className={"viewWorkBtn"}
          />
          {liveSite}
        </div>
      </section>
    </div>
  );
}

export default ProjectsDetailsScreen;

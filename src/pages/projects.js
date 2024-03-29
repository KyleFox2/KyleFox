import ProjectTile from "../components/projectTile";

function Projects() {
  const placeholderImg =
    "https://www.thesprucepets.com/thmb/hxWjs7evF2hP1Fb1c1HAvRi_Rw0=/2765x0/filters:no_upscale():strip_icc()/chinese-dog-breeds-4797219-hero-2a1e9c5ed2c54d00aef75b05c5db399c.jpg";
  const projects = [
    {
      title: "Blog Site",
      src: placeholderImg,
      description: "Description of the project goes here.",
      link: "./",
    },
    {
      title: "Password Manager",
      src: placeholderImg,
      description: "Description of the project goes here.",
      link: "./",
    },
    {
      title: "Portfolio Site",
      src: placeholderImg,
      description: "Description of the project goes here.",
      link: "./",
    },
    {
      title: "Clock App",
      src: placeholderImg,
      description: "Description of the project goes here.",
      link: "./",
    },
    {
      title: "Calculator",
      src: placeholderImg,
      description: "Description of the project goes here.",
      link: "./",
    },
    {
      title: "Demo Selenium Project",
      src: placeholderImg,
      description: "Description of the project goes here.",
      link: "./",
    },
  ];
  return (
    <section id="projects">
      <h2 className="title highlight">Projects</h2>
      <div className="projects-container">
        {projects.map((project, index) => (
          <ProjectTile
            title={project.title}
            src={project.src}
            description={project.description}
            link={project.link}
            key={index}
          ></ProjectTile>
        ))}
      </div>
    </section>
  );
}

export default Projects;

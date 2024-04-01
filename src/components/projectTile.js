import Button from "../components/button";

function ProjectTile({ title, src, description, link, index }) {
  return (
    <div key={index} className="project">
      <h3>{title}</h3>
      <img src={process.env.PUBLIC_URL + src} alt="Portfolio Screenshot" />
      <p>{description}</p>
      <Button text="Details" link={link} className="viewWorkBtn" />
    </div>
  );
}

export default ProjectTile;

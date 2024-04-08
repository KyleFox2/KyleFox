import * as Imports from "../assets/importFile";

function ProjectTile({ title, src, description, index, id }) {
  return (
    <div key={index} className="project">
      <h3>{title}</h3>
      <img src={process.env.PUBLIC_URL + src} alt="Portfolio Screenshot" />
      <p>{description}</p>
      <Imports.Button
        text="Details"
        link={`/projectdetails/${id}`}
        className="viewWorkBtn"
      />
    </div>
  );
}

export default ProjectTile;

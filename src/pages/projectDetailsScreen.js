import React, { useRef } from "react";
import datafile from "../datafile.json";

function ProjectsDetailsScreen(id) {
  const projectId = window.location.pathname.split("/")[2];

  return (
    <section id="projects">
      <h2 className="title highlight">{projectId}</h2>
    </section>
  );
}

export default ProjectsDetailsScreen;

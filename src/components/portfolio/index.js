import React from "react";
import Project from "components/project";
import example from "assets/portfolio/green-route.png";
import "./Portfolio.scss";

//project images

function Portfolio(props) {
  return (
    <div className="projects">
      {props.projects.map((project) => (
        <div className="project_item" key={project}>
          <Project
            name={project.name}
            description={project.description}
            site={project.site}
            github={project.github}
            devpost={project.devpost}
            images={project.images}
          />
        </div>
      ))}
    </div>
  );
}

export default Portfolio;

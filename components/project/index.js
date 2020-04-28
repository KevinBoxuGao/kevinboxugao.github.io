import React, { useState } from "react";
import Carousel from "components/carousel";

import XButton from "assets/icons/x-button.svg";
import "./Project.scss";

function Project(props) {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="project">
      <div className="project-button" onClick={() => setToggle(!toggle)}>
        <img src={props.photos[0]} />
      </div>
      <div className={"project-page" + (toggle ? " active" : "")}>
        <button className="exit-button" onClick={() => setToggle(!toggle)}>
          <img src={XButton} />
        </button>
        <div className="project-details">
          <div className="basic-info">
            <h3 className="title">{props.name}</h3>
            <p className="description">{props.description}</p>
            {props.site != null ? (
              <a href={props.site} className="site-button">
                View Site
              </a>
            ) : null}
          </div>
          <div className="additional-links">
            {props.github != null ? (
              <a href={props.github} className="github-button">
                Github
              </a>
            ) : null}
            {props.devpost != null ? (
              <a href={props.devpost} className="github-button">
                Devpost
              </a>
            ) : null}
          </div>
        </div>
        <Carousel images={props.photos} />
      </div>
    </div>
  );
}

export default Project;

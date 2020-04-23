import React from "react";
import { Link } from "react-router-dom";
import Project from "components/project";
import "./Portfolio.scss";

//project images
import example from "assets/portfolio/green-route.png";

function Portfolio() {
  return (
    <div id="portfolio">
      <h1 className="title">Work</h1>
      <p className="description">
        Personal programs, hackathon projects and much more
      </p>
      <div className="projects">
        <div className="project-grid">
          <Project
            name="Twice4Life"
            description=""
            site=""
            github=""
            devpost=""
            photos={[example]}
          />
          <Project
            name="Generation of Electricity"
            description=""
            site=""
            github=""
            photos={[example]}
          />
          <Project
            name="Sock Match"
            description="Mobile app for identifying matching socks for use by the visually impaired."
            site=""
            github=""
            devpost=""
            photos={[example]}
          />
          <Project
            name="Orderly Lifestyle"
            description=""
            site=""
            github=""
            photos={[example]}
          />
          <Project
            name="Green Route"
            description=""
            site=""
            github=""
            devpost=""
            photos={[example]}
          />
          <Project
            name="Spent Web"
            description=""
            site=""
            github=""
            devpost=""
            photos={[example]}
          />
        </div>
        <Link className="more-link" to="/work">
          <p>More</p>
        </Link>
        <div className="links">
          <a href="https://github.com/KevinBoxuGao" className="github-link">
            <p>More on Github</p>
          </a>
          <a href="https://devpost.com/KevinBoxuGao" className="devpost-link">
            <p>Devpost</p>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;

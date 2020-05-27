import React, { useState } from "react";
import Project from "components/project";
import PropTypes from "prop-types";
import "./Portfolio.scss";
import { motion, AnimatePresence } from "framer-motion";

const tech = [
  "All",
  "Front-End",
  "Back-End",
  "HTML5",
  "SASS",
  "Reactjs",
  "React Native",
  "Nodejs",
  "Javascript",
  "Google Cloud",
  "Firebase",
  "Python",
  "C++",
];

const variants = {
  enter: {
    opacity: 0,
  },
  display: {
    opacity: 1,
  },
  exit: {
    opacity: 0,
  },
};

function Portfolio(props) {
  const [Filter, setFilter] = useState("All");

  return (
    <React.Fragment>
      {props.withFilter ? (
        <div className="project-filter">
          {tech.map((tech) => (
            <span key={tech} onClick={() => setFilter(tech)}>
              {tech}
            </span>
          ))}
        </div>
      ) : null}
      <div className="projects">
        <AnimatePresence>
          {props.projects
            .filter(function (project) {
              if (Filter == "All") {
                return true;
              } else {
                return project.filters.includes(Filter);
              }
            })
            .map((project, index) => (
              <motion.div
                initial="enter"
                animate="display"
                exit="exit"
                variants={variants}
                className="project_item"
                key={index}
              >
                <Project
                  name={project.name}
                  description={project.description}
                  site={project.site}
                  github={project.github}
                  devpost={project.devpost}
                  images={project.images}
                  tech={project.tech}
                />
              </motion.div>
            ))}
        </AnimatePresence>
      </div>
    </React.Fragment>
  );
}

Portfolio.propTypes = {
  withFilter: PropTypes.bool,
  projects: PropTypes.array,
};

export default Portfolio;

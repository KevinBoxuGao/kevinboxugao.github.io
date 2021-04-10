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
  "Material-UI",
  "Bootstrap",
  "React.js",
  "React Native",
  "Python",
  "C#",
  "REST API",
];

function Portfolio(props) {
  const [projects, setProjects] = useState(props.projects);

  const filterProjects = (filter) => {
    setProjects(
      shuffle(
        props.projects.filter(function (project) {
          if (filter == "All") {
            return true;
          } else {
            return project.filters.includes(filter);
          }
        })
      )
    );
  };

  const shuffle = (array) => {
    return array.sort(() => Math.random() - 0.5);
  };

  return (
    <div>
      {props.withFilter ? (
        <div className="project-filter">
          {tech.map((tech) => (
            <motion.span
              whileHover={{ scale: 1.2 }}
              key={tech}
              onClick={() => filterProjects(tech)}
            >
              {tech}
            </motion.span>
          ))}
        </div>
      ) : null}
      <div className="projects">
        <AnimatePresence>
          {projects.map((project, index) => (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
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
    </div>
  );
}

Portfolio.propTypes = {
  withFilter: PropTypes.bool,
  projects: PropTypes.array,
};

export default Portfolio;

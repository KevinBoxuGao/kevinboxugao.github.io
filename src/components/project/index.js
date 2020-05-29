import React, { useState } from "react";
import { motion } from "framer-motion";
import Carousel from "components/carousel";
import PropTypes from "prop-types";
import XButton from "assets/icons/x-button.svg";
import "./Project.scss";

const imgVariants = {
  default: {
    opacity: 0.8,
    transition: { duration: 0.3 },
  },
  hover: {
    opacity: 0.5,
    transition: { duration: 0.3 },
  },
};

const titleVariants = {
  default: {
    opacity: 0,
    transition: { duration: 0.3 },
  },
  hover: {
    opacity: 1,
    transition: { duration: 0.3 },
  },
};

const linkVariants = {
  default: {
    scale: 1,
    transition: { duration: 0.3 },
  },
  hover: {
    scale: 1.2,
    transition: { duration: 0.3 },
  },
};

const exitButtonVariants = {
  default: {
    scale: 1,
  },
  hover: {
    scale: 1.2,
  },
};

const pageVariants = {
  visible: {
    opacity: 1,
    x: "0%",
    transition: {
      x: { stiffness: 500 },
    },
  },
  hidden: {
    opacity: 0,
    x: "100%",
    transition: {
      x: { stiffness: 500 },
    },
  },
};

function Project(props) {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="project">
      <motion.div
        initial={"default"}
        whileHover="hover"
        className="project-button"
        onClick={() => setToggle(!toggle)}
      >
        {props.images ? (
          <motion.img variants={imgVariants} src={props.images[0]} />
        ) : null}
        <motion.h3 variants={titleVariants} className="project-title">
          {props.name}
        </motion.h3>
      </motion.div>
      <motion.div
        initial={toggle ? "visible" : "hidden"}
        animate={toggle ? "visible" : "hidden"}
        className="project-page"
        variants={pageVariants}
      >
        <motion.button
          initial={"default"}
          whileHover="hover"
          variants={exitButtonVariants}
          className="exit-button"
          onClick={() => setToggle(!toggle)}
        >
          <XButton viewBox="0 0 38 38" />
        </motion.button>

        <div className="project-page_content">
          {props.images ? (
            <div className="project-display">
              <Carousel images={props.images} />
            </div>
          ) : null}
          <div className="project-details">
            <div className="basic-info">
              <h3 className="title">{props.name}</h3>
              <p className="description">{props.description}</p>
              {props.site != null ? (
                <motion.a
                  initial={"default"}
                  whileHover="hover"
                  variants={linkVariants}
                  href={props.site}
                  className="site-button"
                >
                  View Project
                </motion.a>
              ) : null}
            </div>
            <div className="additional-links">
              {props.github != null ? (
                <motion.a
                  initial={"default"}
                  whileHover="hover"
                  variants={linkVariants}
                  href={props.github}
                  className="github-button"
                >
                  Github
                </motion.a>
              ) : null}
              {props.devpost != null ? (
                <motion.a
                  initial={"default"}
                  whileHover="hover"
                  variants={linkVariants}
                  href={props.devpost}
                  className="devpost-button"
                >
                  Devpost
                </motion.a>
              ) : null}
            </div>
            <div className="project_tech-stack">
              {props.tech.map((tech) => (
                <span key={tech}>{tech}</span>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

Project.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
  github: PropTypes.string,
  devpost: PropTypes.string,
  site: PropTypes.string,
  images: PropTypes.array,
  tech: PropTypes.array,
  featured: PropTypes.bool,
};

export default Project;

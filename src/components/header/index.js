import React from "react";
import { motion } from "framer-motion";
import "./Header.scss";

const Path = (props) => (
  <motion.path fill="transparent" strokeWidth="4" stroke="white" {...props} />
);

const headerVariants = {
  hidden: {
    transition: { staggerChildren: 0.5, delay: 0.5 },
  },
  display: {
    transition: { staggerChildren: 0.5, delay: 0.5 },
  },
};
const titleVariants = {
  hidden: {
    transition: { staggerChildren: 0.3 },
  },
  display: {
    transition: { staggerChildren: 0.3 },
  },
};
const titleItem = {
  display: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  hidden: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};
const buttonContainer = {
  display: {
    opacity: 1,
    transition: { staggerChildren: 0.5, delay: 0.5 },
  },
  hidden: {
    opacity: 0,
    transition: { staggerChildren: 0.5, delay: 0.5 },
  },
  hover: {
    transition: { staggerChildren: 0.5, delay: 0.5 },
  },
};

const buttonVariants = {
  display: {
    opacity: 1,
  },
  hidden: {
    opacity: 0,
  },
  hover: {
    y: -10,
    transition: {
      y: { stiffness: 1000, velocity: -1000 },
    },
  },
};

function Header(props) {
  return (
    <motion.div
      id="header"
      initial={"hidden"}
      animate={"display"}
      variants={headerVariants}
    >
      <motion.div className="title_container" variants={titleVariants}>
        <motion.p variants={titleItem} className="title">
          Kevin Gao
        </motion.p>
        <motion.p variants={titleItem} className="subtitle">
          Web Developer
        </motion.p>
      </motion.div>
      <motion.div
        className="button_container"
        whileHover="hover"
        variants={buttonContainer}
        onClick={props.handleScroll}
      >
        <a className="continue-button">
          <motion.p variants={buttonVariants} className="button_label">
            Portfolio
          </motion.p>
          <motion.svg
            variants={{
              hidden: {
                width: "150",
                height: "70",
                viewBox: "0 0 150 70",
              },
              display: {
                width: "150",
                height: "70",
                viewBox: "0 0 150 70",
              },
              hover: {
                width: "150",
                height: "70",
                viewBox: "0 0 90 120",
              },
            }}
          >
            <Path
              variants={{
                hidden: {
                  d: "M144.926 2L75 67.2642L5.07404 2H75L144.926 2Z",
                  stroke: "white",
                  strokeWidth: "4",
                },
                display: {
                  d: "M144.926 2L75 67.2642L5.07404 2H75L144.926 2Z",
                  stroke: "white",
                  strokeWidth: "4",
                },
                hover: {
                  d: "M144.926 2L75 67.2642L5.07404 2H75L144.926 2Z",
                  stroke: "white",
                  strokeWidth: "4",
                },
              }}
            />
          </motion.svg>
        </a>
      </motion.div>
    </motion.div>
  );
}

export default Header;

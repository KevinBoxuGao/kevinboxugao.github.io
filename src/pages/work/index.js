import React from "react";
import Portfolio from "components/portfolio";
import Projects from "data/projects.js";
import Layout from "components/layout";
import "./Work.scss";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: {
    transition: { staggerChildren: 0.3 },
  },
  display: {
    transition: { staggerChildren: 0.3 },
  },
};

const elementVariants = {
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

const fadeVariants = {
  display: {
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  hidden: {
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

function Work() {
  return (
    <div id="work-page" className="scroll">
      <Layout>
        <motion.div
          initial={"hidden"}
          animate={"display"}
          variants={containerVariants}
        >
          <motion.h1 variants={elementVariants} className="work-title">
            Work
          </motion.h1>
          <motion.div variants={elementVariants}>
            <Portfolio projects={Projects} withFilter />
          </motion.div>
          <motion.div variants={elementVariants} className="links">
            <motion.a
              initial={"default"}
              whileHover={"hover"}
              variants={{
                default: {
                  backgroundColor: "#000000",
                  color: "#FFFFFF",
                  transition: { duration: 0.3 },
                },
                hover: {
                  backgroundColor: "#2c2c2c",
                  color: "#cccccc",
                  transition: { duration: 0.3 },
                },
              }}
              href="https://github.com/KevinBoxuGao"
              className="github-link"
            >
              <p>More on Github</p>
            </motion.a>
            <motion.a
              initial={"default"}
              whileHover="hover"
              variants={{
                default: {
                  backgroundColor: "#154c75",
                  color: "#FFFFFF",
                  transition: { duration: 0.3 },
                },
                hover: {
                  backgroundColor: "#4c78a4",
                  color: "#cccccc",
                  transition: { duration: 0.3 },
                },
              }}
              href="https://devpost.com/KevinBoxuGao"
              className="devpost-link"
            >
              <p>Devpost</p>
            </motion.a>
          </motion.div>
        </motion.div>
      </Layout>
    </div>
  );
}

export default Work;

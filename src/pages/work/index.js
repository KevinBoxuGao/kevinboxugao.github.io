import React from "react";
import Portfolio from "components/portfolio";
import Projects from "data/projects.js";
import Layout from "components/layout";
import "./Work.scss";
import { motion } from "framer-motion";

function Work() {
  return (
    <div id="work-page">
      <Layout>
        <h1 className="work-title">Work</h1>
        <Portfolio projects={Projects} withFilter />
        <div className="links">
          <motion.a
            initial={"default"}
            whileHover="hover"
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
        </div>
      </Layout>
    </div>
  );
}

export default Work;

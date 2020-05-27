import React, { useEffect } from "react";
import Layout from "components/layout";
import Footer from "components/footer";
import "./About.scss";
import { motion } from "framer-motion";

const textVariants = {
  visible: {
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

const containerVariants = {
  hidden: {
    transition: { staggerChildren: 0.3 },
  },
  visible: {
    transition: { staggerChildren: 0.3 },
  },
};

const sectionVariants = {
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  hidden: {
    y: 50,
    opacity: 0,
    transition: {
      staggerChildren: 0.3,
      y: { stiffness: 1000 },
    },
  },
};

const fadeIn = {
  visible: {
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

function About() {
  return (
    <div id="about-page">
      <Layout>
        <motion.div
          id="about"
          initial={"hidden"}
          animate={"visible"}
          variants={containerVariants}
        >
          <motion.h1 variants={textVariants} className="about_title">
            Hello,
          </motion.h1>
          <motion.h3 variants={textVariants} className="about_subtitle">
            I'm Kevin Gao
          </motion.h3>
          <motion.p variants={textVariants} className="about_description">
            I’m a self-taught, high school full stack web developer. I have
            worked on personal projects and have competed at numerous hackathons
          </motion.p>
          <motion.div variants={sectionVariants} className="about_section">
            <h4 className="about_section-title">Skills</h4>

            <div className="section-chunk">
              <h6 className="chunk_title">Languages and Frameworks</h6>
              <div className="list-container flex">
                <span>React.js</span>
                <span>React Native</span>
                <span>HTML</span>
                <span>CSS</span>
                <span>Bootstrap</span>
                <span>Material-UI</span>
                <span>Javascript</span>
                <span>JQuery</span>
                <span>Node.js</span>
                <span>Express</span>
                <span>Python</span>
                <span>Flask</span>
                <span>C++</span>
              </div>
            </div>
            <div className="section-chunk">
              <h6 className="chunk_title">Tools, Software and Services</h6>
              <div className="list-container flex">
                <span>Figma</span>
                <span>Adobe XD</span>
                <span>Git</span>
                <span>Powershell</span>
                <span>Command Line</span>
                <span>GCloud</span>
                <span>Firebase</span>
                <span>Netlify</span>
              </div>
            </div>
          </motion.div>
          <motion.div variants={sectionVariants} className="about_section">
            <h4 className="about_section-title">Recognition</h4>
            <div className="section-chunk">
              <h6 className="chunk_title">Hackathons</h6>
              <ul className="list-container">
                <li>Hack the Earth | Best Natural Resources Hack</li>
                <li>DistanceHacks | Honorable Mention - Top 5</li>
                <li>Formatic Sponsor Prize | ETHWaterloo 2019</li>
                <li>2nd Place Overall | JAMHacks 3</li>
                <a
                  className="about_devpost-link"
                  href="https://devpost.com/KevinBoxuGao"
                >
                  More on Devpost
                </a>
              </ul>
            </div>
            <motion.div variants={sectionVariants} className="section-chunk">
              <h6 className="chunk_title">CEMC</h6>
              <ul className="list-container">
                <li>
                  Canadian Computing Competition 2020 | Senior Distinction
                </li>
                <li>
                  Canadian Computing Competition 2019 | Junior Distinction
                </li>
                <li>Fryer 2018 | Student Honor Roll</li>
                <li>Pascal 2018 | Distinction</li>
              </ul>
            </motion.div>
          </motion.div>
          <motion.a variants={fadeIn} className="about_resume-link">
            Resume
          </motion.a>
        </motion.div>
      </Layout>
      <Footer />
    </div>
  );
}

export default About;

import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import VisibilitySensor from "react-visibility-sensor";

import Header from "components/header";
import Layout from "components/layout";
import Portfolio from "components/portfolio";
import Footer from "components/footer";
import "./Home.scss";

import featured from "data/featured.js";

const layoutVariants = {
  visible: {
    opacity: 1,
  },
  hidden: {
    opacity: 0,
  },
};

const linkVariants = {
  default: {
    opacity: 0.5,
    transition: { duration: 0.5 },
  },
  hover: {
    opacity: 1,
    transition: { duration: 0.5 },
  },
};

function Home() {
  const [State, setState] = useState({
    vis1: false,
    vis2: false,
    vis3: false,
  });

  const [vis1, setVis1] = useState(false);
  const [vis2, setVis2] = useState(false);
  const [vis3, setVis3] = useState(false);

  const onChangeVisibility1 = (isActive) => {
    setVis1(isActive);
  };
  const onChangeVisibility2 = (isActive) => {
    setVis2(isActive);
  };
  const onChangeVisibility3 = (isActive) => {
    setVis3(isActive);
  };
  const layoutRef = useRef();
  const executeScroll = () => {
    layoutRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  const headerRef = useRef();
  const scrollTop = () => {
    headerRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div id="home-page" ref={headerRef} className="scroll">
      <Header handleScroll={executeScroll} />
      <div ref={layoutRef}>
        <Layout>
          <VisibilitySensor
            onChange={(e) => onChangeVisibility1(e)}
            active={!vis1}
            partialVisibility={"top"}
            minTopValue={50}
          >
            {({ isVisible }) => (
              <motion.div
                initial={isVisible || vis2 || vis3 ? "visible" : "hidden"}
                animate={isVisible || vis2 || vis3 ? "visible" : "hidden"}
                variants={layoutVariants}
              >
                <h1 className="section-title">Work</h1>
                <p className="section-description">
                  Personal programs, hackathon projects and much more
                </p>
              </motion.div>
            )}
          </VisibilitySensor>
          <VisibilitySensor
            onChange={(e) => onChangeVisibility2(e)}
            active={!vis2}
            partialVisibility={"top"}
            minTopValue={50}
          >
            {({ isVisible }) => (
              <motion.div
                initial={isVisible || vis3 ? "visible" : "hidden"}
                animate={isVisible || vis3 ? "visible" : "hidden"}
                variants={layoutVariants}
              >
                <Portfolio projects={featured} />
              </motion.div>
            )}
          </VisibilitySensor>
          <VisibilitySensor
            onChange={(e) => onChangeVisibility3(e)}
            active={!vis3}
            partialVisibility={"top"}
            minTopValue={120}
          >
            {({ isVisible }) => (
              <motion.div
                initial={isVisible ? "visible" : "hidden"}
                animate={isVisible ? "visible" : "hidden"}
                variants={layoutVariants}
              >
                <motion.div
                  initial={"default"}
                  whileHover="hover"
                  variants={{
                    default: {
                      background: "#005ECD",
                      transition: { duration: 0.3 },
                    },
                    hover: {
                      background: "#00369b",
                      transition: { duration: 0.3 },
                    },
                  }}
                >
                  <Link to="/work">
                    <p className="more-link">More</p>
                  </Link>
                </motion.div>
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
              </motion.div>
            )}
          </VisibilitySensor>
        </Layout>
      </div>
      <Footer scrollTop={scrollTop} />
    </div>
  );
}

export default Home;

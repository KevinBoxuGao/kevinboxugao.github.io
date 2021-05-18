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

function Home() {
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
  const topRef = useRef();
  const executeScroll = () => {
    layoutRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  const scrollTop = () => {
    topRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div id="home-page" className="scroll">
      <span ref={topRef} />
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
                <p className="section-description">Featured Work</p>
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
                <div className="links">
                  <motion.div
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
                    className="page-link"
                  >
                    <Link aria-label="link to more projects" to="/work">
                      <p className="more-link">More Projects</p>
                    </Link>
                  </motion.div>
                  <motion.div
                    initial={"default"}
                    whileHover="hover"
                    variants={{
                      default: {
                        backgroundColor: "#005ecd",
                        color: "#FFFFFF",
                        transition: { duration: 0.3 },
                      },
                      hover: {
                        backgroundColor: "#00369b",
                        color: "#cccccc",
                        transition: { duration: 0.3 },
                      },
                    }}
                    className="page-link"
                  >
                    <Link aria-label="link to about page" to="/about">
                      <p className="more-link">About</p>
                    </Link>
                  </motion.div>
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

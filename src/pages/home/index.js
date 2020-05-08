import React, { useRef } from "react";
import { Link } from "react-router-dom";

import Header from "components/header";
import Layout from "components/layout";
import Portfolio from "components/portfolio";
import Footer from "components/footer";
import "./Home.scss";

import projects from "data/projects.js";

function Home() {
  var layoutRef = useRef();
  const handleScroll = (ref) => {
    //ref.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div id="home-page">
      <Header scrollDown={handleScroll(layoutRef)} />
      <Layout ref={layoutRef}>
        <h1 className="section-title">Work</h1>
        <p className="section-description">
          Personal programs, hackathon projects and much more
        </p>
        <Portfolio projects={projects} />
        <Link to="/work">
          <p className="more-link">More</p>
        </Link>
        <div className="links">
          <a href="https://github.com/KevinBoxuGao" className="github-link">
            <p>More on Github</p>
          </a>
          <a href="https://devpost.com/KevinBoxuGao" className="devpost-link">
            <p>Devpost</p>
          </a>
        </div>
      </Layout>
      <Footer />
    </div>
  );
}

export default Home;

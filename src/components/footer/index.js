import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Logo from "assets/icons/logo.svg";
import VisibilitySensor from "react-visibility-sensor";
import "./Footer.scss";

const FooterVariants = {
  visible: () => ({
    y: 0,
    transition: {
      y: { stiffness: 1000 },
    },
    opacity: 1,
  }),
  hidden: () => ({
    y: 50,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
    opacity: 0,
  }),
};

const linkVariants = {
  default: {
    color: "#433f40",
    transition: { duration: 0.3 },
  },
  hover: {
    color: "#aaaaaa",
    transition: { duration: 0.3 },
  },
};

function Footer(props) {
  return (
    <VisibilitySensor>
      {({ isVisible }) => (
        <div className="footer_container">
          <motion.div
            id="footer"
            initial={isVisible ? "visible" : "hidden"}
            animate={isVisible ? "visible" : "hidden"}
            variants={FooterVariants}
          >
            <Logo
              width="8em"
              height="8em"
              viewBox="0 0 150 150"
              className="footer_logo"
              onClick={props.scrollTop}
            />
            <div className="footer_links">
              <div className="link_group">
                <Link to="/work">
                  <h3 style={{ color: "black" }}>Work</h3>
                </Link>
                <ul>
                  <li>
                    <motion.a
                      whileHover="hover"
                      variants={linkVariants}
                      href="https://github.com/KevinBoxuGao"
                    >
                      Github
                    </motion.a>
                  </li>
                  <li>
                    <motion.a
                      whileHover="hover"
                      variants={linkVariants}
                      href=""
                    >
                      Resume
                    </motion.a>
                  </li>
                  <li>
                    <motion.a
                      whileHover="hover"
                      variants={linkVariants}
                      href="https://devpost.com/KevinBoxuGao"
                    >
                      Devpost
                    </motion.a>
                  </li>
                </ul>
              </div>
              <div className="link_group">
                <h3>Contact</h3>
                <ul>
                  <li>
                    <p>kevingao2003@gmail.com</p>
                  </li>
                  <li>
                    <p>206-336-1746</p>
                  </li>
                  <li>
                    <motion.a
                      whileHover="hover"
                      variants={linkVariants}
                      href="https://www.linkedin.com/in/kevin-gao-1b8777186/"
                    >
                      Linkedin
                    </motion.a>
                  </li>
                </ul>
              </div>
              <div className="link_group">
                <h3>Social</h3>
                <ul>
                  <li>
                    <motion.a
                      whileHover="hover"
                      variants={linkVariants}
                      href="https://www.facebook.com/"
                    >
                      Facebook
                    </motion.a>
                  </li>
                  <li>
                    <motion.a
                      whileHover="hover"
                      variants={linkVariants}
                      href="https://twitter.com/Kevin_Boxu_Gao"
                    >
                      Twitter
                    </motion.a>
                  </li>
                  <li>
                    <motion.a
                      whileHover="hover"
                      variants={linkVariants}
                      href="https://www.instagram.com/kevin___gao/"
                    >
                      Instagram
                    </motion.a>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </VisibilitySensor>
  );
}

Footer.propTypes = {
  scrollTop: PropTypes.func,
};

export default Footer;

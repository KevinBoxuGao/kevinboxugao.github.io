import React from "react";
import Logo from "assets/icons/logo-black.svg";
import VisibilitySensor from "react-visibility-sensor";
import { Spring } from "react-spring/renderprops";
import "./Footer.scss";

function Footer() {
  return (
    <VisibilitySensor>
      {({ isVisible }) => (
        <Spring
          delay={100}
          to={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(20px)",
          }}
        >
          {(props) => (
            <div className="footer_container">
              <div id="footer" style={props}>
                <img className="footer_logo" src={Logo} />
                <div className="footer_links">
                  <div className="link_group">
                    <h3>Work</h3>
                    <ul>
                      <li>
                        <a>Github</a>
                      </li>
                      <li>
                        <a>Resume</a>
                      </li>
                      <li>
                        <a>Devpost</a>
                      </li>
                    </ul>
                  </div>
                  <div className="link_group">
                    <h3>Contact</h3>
                    <ul>
                      <li>
                        <a>kevingao2003@gmail.com</a>
                      </li>
                      <li>
                        <a>206-336-1746</a>
                      </li>
                      <li>
                        <a>Linkedin</a>
                      </li>
                    </ul>
                  </div>
                  <div className="link_group">
                    <h3>Social</h3>
                    <ul>
                      <li>
                        <a>Facebook</a>
                      </li>
                      <li>
                        <a>Twitter</a>
                      </li>
                      <li>
                        <a>Instagram</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          )}
        </Spring>
      )}
    </VisibilitySensor>
  );
}

export default Footer;

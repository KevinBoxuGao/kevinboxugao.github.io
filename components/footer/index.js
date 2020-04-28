import React from "react";

function Footer() {
  return (
    <div id="footer">
      <img className="footer_logo" src="/icons/logo-black.svg" />
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
  );
}

export default Footer;

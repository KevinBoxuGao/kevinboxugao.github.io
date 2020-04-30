import React from "react";
import Arrow from "assets/icons/portfolio.svg";
import "./Header.scss";

function Header() {
  return (
    <div id="header">
      <div className="title_container">
        <p className="title">Kevin Gao</p>
        <p className="subtitle">Web Developer</p>
      </div>
      <div className="button_container">
        <a className="continue-button">
          <p className="button_label">Portfolio</p>
          <img className="button_icon" src={Arrow} />
        </a>
      </div>
    </div>
  );
}

export default Header;

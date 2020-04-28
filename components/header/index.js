import React from "react";

function Header() {
  return (
    <div className="header">
      <div className="title_container">
        <p className="title">Kevin Gao</p>
        <p className="subtitle">Web Developer</p>
      </div>
      <div className="button_container">
        <a className="continue-button">
          <p className="button_label">Portfolio</p>
          <img className="button_icon" src="/icons/portfolio.svg" />
        </a>
      </div>
    </div>
  );
}

export default Header;

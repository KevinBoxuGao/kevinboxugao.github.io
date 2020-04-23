import React, { useState } from "react";
import { Link } from "react-router-dom";
import Hamburger from "assets/icons/hamburger.svg";
import "./Menu.scss";

function Menu() {
  const [menuOpen, toggleMenu] = useState(false);

  const handleMenuToggle = () => {
    let open = menuOpen ? false : true;
    toggleMenu(open);
  };

  return (
    <div className={"menu" + (menuOpen ? " active" : "")}>
      <button className="menu_button" onClick={handleMenuToggle}>
        <img className="icon" src={Hamburger} />
      </button>
      <div className="menu_page">
        <ul className="links">
          <li>
            <Link to="/" className="menu_link" onClick={handleMenuToggle}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/work" className="menu_link" onClick={handleMenuToggle}>
              Work
            </Link>
          </li>
          <li>
            <Link to="/about" className="menu_link" onClick={handleMenuToggle}>
              About
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Menu;

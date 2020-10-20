import React, { useState } from "react";
import { motion } from "framer-motion";
import Toggle from "./Toggle";
import { Link } from "react-router-dom";
import "./Menu.scss";

const sidebar = {
  open: {
    x: "0%",
    transition: {
      stiffness: 20,
    },
  },
  closed: {
    x: "-100%",
    transition: {
      stiffness: 400,
    },
  },
};

function Menu() {
  const [menuOpen, toggleMenu] = useState(false);

  const handleMenuToggle = () => {
    let open = menuOpen ? false : true;
    toggleMenu(open);
  };

  return (
    <motion.div
      className="menu"
      initial={false}
      animate={menuOpen ? "open" : "closed"}
    >
      <Toggle toggle={handleMenuToggle} />
      <motion.div className="menu_page" variants={sidebar}>
        <ul className="menu_links">
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
      </motion.div>
    </motion.div>
  );
}

export default Menu;

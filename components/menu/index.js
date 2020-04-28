import React, { useState } from "react";
import Link from "next/link";

function Menu() {
  const [menuOpen, toggleMenu] = useState(false);

  const handleMenuToggle = () => {
    let open = menuOpen ? false : true;
    toggleMenu(open);
  };

  return (
    <div className={"menu" + (menuOpen ? " active" : "")}>
      <button className="button" onClick={handleMenuToggle}>
        <img className="button__icon" src="/icons/hamburger.svg" />
      </button>
      <div className="page">
        <ul className="page__links">
          <li>
            <Link href="/" className="menu_link" onClick={handleMenuToggle}>
              Home
            </Link>
          </li>
          <li>
            <Link href="/work" className="menu_link" onClick={handleMenuToggle}>
              Work
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className="menu_link"
              onClick={handleMenuToggle}
            >
              About
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Menu;

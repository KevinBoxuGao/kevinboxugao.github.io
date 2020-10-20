import React, { Component } from "react";
import "./Layout.scss";
import { motion } from "framer-motion";

const variants = {
  visible: {
    opacity: 1,
    transition: {
      x: { stiffness: 500 },
    },
  },
  hidden: {
    opacity: 0,
    transition: {
      x: { stiffness: 500 },
    },
  },
};

class Layout extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <motion.div
        initial={"hidden"}
        animate={"visible"}
        variants={variants}
        className="layout"
      >
        {this.props.children}
      </motion.div>
    );
  }
}

export default Layout;

import React from "react";
import { motion } from "framer-motion";
import "./Toggle.scss";

const buttonVariants = {
  default: {
    scale: 1,
  },
  hover: {
    scale: 1.2,
  },
};

const Path = (props) => (
  <motion.path fill="transparent" strokeWidth="2" stroke="white" {...props} />
);

function Toggle(props) {
  return (
    <motion.button
      className="menu_button"
      variants={buttonVariants}
      intial="default"
      whileHover="hover"
      onClick={props.toggle}
    >
      <svg width="3em" height="100%" viewBox="0 0 20 20">
        <Path
          variants={{
            closed: { d: "M 2 2.5 L 20 2.5" },
            open: { d: "M 3 16.5 L 17 2.5" },
          }}
        />
        <Path
          d="M 2 9.423 L 20 9.423"
          variants={{
            closed: { opacity: 1 },
            open: { opacity: 0 },
          }}
          transition={{ duration: 0.1 }}
        />
        <Path
          variants={{
            closed: { d: "M 2 16.346 L 20 16.346" },
            open: { d: "M 3 2.5 L 17 16.346" },
          }}
        />
      </svg>
    </motion.button>
  );
}

export default Toggle;

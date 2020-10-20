import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Arrow from "assets/icons/Arrow.svg";
import { wrap } from "@popmotion/popcorn";
import PropTypes from "prop-types";

import "./Carousel.scss";

const variants = {
  enter: (direction) => ({
    x: direction > 0 ? 1000 : -1000,
    opacity: 0,
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction) => ({
    zIndex: 0,
    x: direction < 0 ? 1000 : -1000,
    opacity: 0,
  }),
};

function Carousel(props) {
  const [[image, direction], setScroll] = useState([0, 0]);
  const imageIndex = wrap(0, props.images.length, image);

  const scrollSelect = (index) => {
    console.log(index);
    var direction = image > index ? -1 : 1;
    setScroll([index, direction]);
  };

  const scroll = (direction) => {
    setScroll([image + direction, direction]);
  };

  return (
    <React.Fragment>
      <div className="image-carousel">
        <AnimatePresence initial={false} custom={direction}>
          <motion.img
            className="display-image"
            key={image}
            initial="enter"
            animate="center"
            exit="exit"
            variants={variants}
            transition={{
              x: { type: "spring", stiffness: 300, damping: 200 },
              opacity: { duration: 0.2 },
            }}
            src={props.images[imageIndex]}
          />
        </AnimatePresence>
        <Arrow
          viewBox="0 0 48 105"
          className="next"
          onClick={() => scroll(1)}
          height="20%"
        />
        <Arrow
          viewBox="0 0 48 105"
          className="prev"
          onClick={() => scroll(-1)}
          height="20%"
        />
      </div>
      <div className="image-control">
        {props.images.map((image, index) => (
          <span
            className={"dot " + (imageIndex == index ? "active" : "")}
            key={index}
            onClick={() => scrollSelect(index)}
          ></span>
        ))}
      </div>
    </React.Fragment>
  );
}
Carousel.propTypes = {
  images: PropTypes.array.isRequired,
};

export default Carousel;

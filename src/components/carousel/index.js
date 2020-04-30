import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import "./Carousel.scss";
import Arrow from "assets/icons/Arrow.svg";

function Carousel(props) {
  const [currentImage, setCurrentImage] = useState(0);
  const [startIndex, setStart] = useState(0);
  const [numSliderImages, setNumSliderImages] = useState(3);
  const [endIndex, setEnd] = useState(0);

  const scrollRight = () => {
    if (currentImage < props.images.length - 1) {
      setCurrentImage(currentImage + 1);
      if (startIndex + numSliderImages < props.images.length) {
        setStart(startIndex + 1);
      }
    }
  };

  const scrollLeft = () => {
    if (currentImage > 0) {
      setCurrentImage(currentImage - 1);
      if (startIndex > 0) {
        setStart(startIndex - 1);
      }
    }
  };

  useEffect(() => {
    let endIndex = startIndex + numSliderImages;
    endIndex = props.images.length < endIndex ? props.images.length : endIndex;
    setEnd(endIndex);
  }, [startIndex]);

  return (
    <div className="carousel">
      <img className="display-image" src={props.images[currentImage]} />
      <div className="image-slider">
        <img className="slider_left-arrow" src={Arrow} onClick={scrollLeft} />
        {props.images.slice(startIndex, endIndex).map((image, index) => (
          <img
            key={index}
            src={image}
            className="slider_image"
            onClick={() => setCurrentImage(index)}
          />
        ))}
        <img className="slider_right-arrow" src={Arrow} onClick={scrollRight} />
      </div>
    </div>
  );
}

Carousel.propTypes = {
  images: PropTypes.array.isRequired,
};

export default Carousel;

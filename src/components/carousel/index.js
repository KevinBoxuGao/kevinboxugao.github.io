import React from "react";
import Arrow from "assets/icons/Arrow.svg";

function Carousel(props) {
  const [currentImage, setCurrentImage] = useState(0);

  const scrollRight = () => {};

  const scrollLeft = () => {};

  return (
    <div className="carousel">
      <img className="display-image" src={currentImage} />
      <div className="image-slider">
        <img
          className="slider__left-arrow"
          src={Arrow}
          onClick={() => scrollLeft}
        />
        {props.photos.map((image) => (
          <img
            key={image}
            src={image}
            className="slider__image"
            onClick={() => setCurrentImage(image)}
          />
        ))}
        <img
          className="slider__right-arrow"
          src={Arrow}
          onClick={() => scrollLeft}
        />
      </div>
    </div>
  );
}

export default Carousel;

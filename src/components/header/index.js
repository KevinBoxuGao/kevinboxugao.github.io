import React, { useRef } from "react";
import { useSpring, useChain, animated } from "react-spring";
import Arrow from "assets/icons/portfolio.svg";
import "./Header.scss";

const config = { mass: 10, tension: 2000, friction: 200, duration: 250 };

function Header(props) {
  const nameRef = useRef();
  const nameProps = useSpring({
    config,
    from: { opacity: 0, transform: "translateY(20px)" },
    to: { opacity: 1, transform: "translateY(0)" },
    ref: nameRef,
  });
  const titleRef = useRef();
  const titleProps = useSpring({
    config,
    from: { opacity: 0, transform: "translateY(20px)" },
    to: { opacity: 1, transform: "translateY(0)" },
    ref: titleRef,
  });
  const buttonRef = useRef();
  const buttonProps = useSpring({
    config,
    from: { opacity: 0 },
    to: { opacity: 1 },
    ref: buttonRef,
  });

  useChain([nameRef, titleRef, buttonRef]);

  return (
    <div id="header">
      <div className="title_container">
        <animated.p style={nameProps} className="title">
          Kevin Gao
        </animated.p>
        <animated.p style={titleProps} className="subtitle">
          Web Developer
        </animated.p>
      </div>
      <animated.div
        style={buttonProps}
        className="button_container"
        onClick={() => props.scrollDown}
      >
        <a className="continue-button">
          <p className="button_label">Portfolio</p>
          <img className="button_icon" src={Arrow} />
        </a>
      </animated.div>
    </div>
  );
}

export default Header;

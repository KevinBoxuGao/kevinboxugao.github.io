import SockMatch1 from "../assets/portfolio/SockMatch/1.png";
import SockMatch2 from "../assets/portfolio/SockMatch/2.png";
import SockMatch4 from "../assets/portfolio/SockMatch/4.jpg";

import Twice4Life1 from "../assets/portfolio/Twice4Life/1.jpg";
import Twice4Life2 from "../assets/portfolio/Twice4Life/2.jpg";
import Twice4Life3 from "../assets/portfolio/Twice4Life/3.jpg";

import GreenRoute1 from "../assets/portfolio/GreenRoute/1.png";
import GreenRoute2 from "../assets/portfolio/GreenRoute/2.png";
import GreenRoute3 from "../assets/portfolio/GreenRoute/3.png";

import OrderlyLifestyle1 from "../assets/portfolio/OrderlyLifestyle/1.png";
import OrderlyLifestyle2 from "../assets/portfolio/OrderlyLifestyle/2.png";

import ReactCalculator1 from "../assets/portfolio/ReactCalculator/1.png";

import SpentWeb1 from "../assets/portfolio/SpentWeb/1.png";
import SpentWeb2 from "../assets/portfolio/SpentWeb/2.png";

const projects = [
  {
    name: "SockMatch",
    description:
      "A mobile application that detects matching pairs of socks using machine learning.",
    github: "https://github.com/KevinBoxuGao/SockMatch",
    devpost: "https://devpost.com/software/sock-match",
    site: "https://expo.io/@kevinboxugao/SockMatch",
    images: [SockMatch1, SockMatch2, SockMatch4],
  },
  {
    name: "Twice4Life",
    description:
      "A web application that uses an LSTM to generate new randomly generated Twice kpop songs",
    github: "https://github.com/KevinBoxuGao/Twice4Life",
    devpost: "https://devpost.com/software/twice4life",
    site: "https://twice4life.online/",
    images: [Twice4Life2, Twice4Life1, Twice4Life3],
  },
  {
    name: "Green Route",
    description:
      "A web app that calculates for you the most environmentally friendly driving route between two destinations, taking into considerations such as elevation and speed.",
    github: "https://github.com/KevinBoxuGao/GreenRoute",
    devpost: "https://devpost.com/software/green-route",
    site: "https://green-route.appspot.com/",
    images: [GreenRoute1, GreenRoute2, GreenRoute3],
  },
  {
    name: "Orderly Lifestyle",
    description: "A simple web app used to keep track of tasks",
    github: "https://github.com/KevinBoxuGao/Orderly-Lifestyle",
    devpost: null,
    site: "https://orderly-lifestyle.appspot.com",
    images: [OrderlyLifestyle1, OrderlyLifestyle2],
  },
  {
    name: "React Calculator",
    description: "Simple calculator web app created using react",
    github: "https://github.com/KevinBoxuGao/Calculator",
    devpost: null,
    site: "https://kevinboxugao.github.io/Calculator/",
    images: [ReactCalculator1],
  },
  {
    name: "SpentWeb",
    description: "An expense tracking web app",
    github: "https://github.com/KevinBoxuGao/Spent",
    devpost: "",
    site: "https://spentweb.appspot.com",
    images: [SpentWeb1, SpentWeb2],
  },
];

export default projects;

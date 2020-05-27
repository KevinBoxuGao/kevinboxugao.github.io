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

import AcreageContour1 from "../assets/portfolio/AcreageContour/logo.png";
import AcreageContour2 from "../assets/portfolio/AcreageContour/upload.png";
import AcreageContour3 from "../assets/portfolio/AcreageContour/preview.png";
import AcreageContour4 from "../assets/portfolio/AcreageContour/result.png";

import OcularAid1 from "../assets/portfolio/OcularAid/gallery1.jpg";
import OcularAid2 from "../assets/portfolio/OcularAid/gallery2.jpg";
import OcularAid3 from "../assets/portfolio/OcularAid/gallery3.jpg";

const Projects = [
  {
    name: "AcreageContour",
    description:
      "A web application that outlines areas of land to track urban sprawl and habitat fragmentation, saving hours of manual manpower with the power of artificial intelligence",
    github: "https://github.com/KevinBoxuGao/AcreageContour",
    devpost: "https://devpost.com/software/acreagecontour",
    site: null,
    images: [
      AcreageContour1,
      AcreageContour2,
      AcreageContour3,
      AcreageContour4,
    ],
    filters: [],
    tech: ["React.js", "Material-UI", "Javascript", "Python"],
    featured: true,
  },
  {
    name: "OcularAid",
    description:
      "A desktop app that can 'see' symptoms of eye strain and fatigue using machine learning. Reminding you to take adequate breaks.",
    github: "https://github.com/KevinBoxuGao/Ocular-Aid",
    devpost: "https://devpost.com/software/ocular-aid-kwld3t",
    site: null,
    images: [OcularAid1, OcularAid2, OcularAid3],
    filters: [],
    tech: ["C#", ".Net", "WPF", "Python"],
    featured: false,
  },
  {
    name: "Twice4Life",
    description:
      "A web application that uses an LSTM to generate new randomly generated Twice kpop songs",
    github: "https://github.com/KevinBoxuGao/Twice4Life",
    devpost: "https://devpost.com/software/twice4life",
    site: "https://twice4life.online/",
    images: [Twice4Life2, Twice4Life1, Twice4Life3],
    filters: [],
    tech: ["React.js", "Bootstrap", "Javascript", "Python"],
    featured: false,
  },
  {
    name: "Sock Match",
    description:
      "A mobile application that detects matching pairs of socks using machine learning.",
    github: "https://github.com/KevinBoxuGao/SockMatch",
    devpost: "https://devpost.com/software/sock-match",
    site: "https://expo.io/@kevinboxugao/SockMatch",
    images: [SockMatch1, SockMatch2, SockMatch4],
    filters: [],
    tech: ["React Native", "Javascript", "Python"],
    featured: true,
  },
  {
    name: "React Calculator",
    description: "Simple calculator web app created using react",
    github: "https://github.com/KevinBoxuGao/Calculator",
    devpost: null,
    site: "https://kevinboxugao.github.io/Calculator/",
    images: [ReactCalculator1],
    filters: [],
    tech: ["React.js", "Javascript"],
    featured: true,
  },
  {
    name: "Green Route",
    description:
      "A web app that calculates for you the most environmentally friendly driving route between two destinations, taking into considerations such as elevation and speed.",
    github: "https://github.com/KevinBoxuGao/GreenRoute",
    devpost: "https://devpost.com/software/green-route",
    site: "https://green-route.appspot.com/",
    images: [GreenRoute1, GreenRoute2, GreenRoute3],
    filters: [],
    tech: ["HTML5", "Bootstrap", "JQuery", "Javascript", "Python", "Flask"],
    featured: true,
  },
  {
    name: "Orderly Lifestyle",
    description: "A simple web app used to keep track of tasks",
    github: "https://github.com/KevinBoxuGao/Orderly-Lifestyle",
    devpost: null,
    site: "https://orderly-lifestyle.appspot.com",
    images: [OrderlyLifestyle1, OrderlyLifestyle2],
    filters: [],
    tech: ["HTML5", "Python", "Firebase", "Flask"],
    featured: true,
  },
  {
    name: "SpentWeb",
    description: "An expense tracking web app",
    github: "https://github.com/KevinBoxuGao/Spent",
    devpost: "https://devpost.com/software/spent",
    site: "https://spentweb.appspot.com",
    images: [SpentWeb1, SpentWeb2],
    filters: [],
    tech: ["HTML5", "Python", "Firebase", "Flask"],
    featured: true,
  },
];

export default Projects;

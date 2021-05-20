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

import FraudSense from "../assets/portfolio/FraudSense/1.png";

import GenerationOfElectricity1 from "../assets/portfolio/GenerationOfElectricity/1.png";
import GenerationOfElectricity2 from "../assets/portfolio/GenerationOfElectricity/2.png";
import GenerationOfElectricity3 from "../assets/portfolio/GenerationOfElectricity/3.png";

import BlockTalk from "../assets/portfolio/BlockTalk/1.jpg";

import TheCamera1 from "../assets/portfolio/TheCamera/1.png";
import TheCamera2 from "../assets/portfolio/TheCamera/2.png";
import TheCamera3 from "../assets/portfolio/TheCamera/3.png";

import cs11 from "../assets/portfolio/ICS3UI/title.png";
import cs1 from "../assets/portfolio/ICS3UI/1.png";
import cs2 from "../assets/portfolio/ICS3UI/2.png";
import cs3 from "../assets/portfolio/ICS3UI/3.png";

import JAMHacks from "../assets/portfolio/JAMHacks/1.png";
import Cheapreats from "../assets/portfolio/Cheapreats/1.png";

const Projects = [
  {
    name: "JAMHacks",
    description:
      "I headed development and design for the 2021 JAMHacks home page",
    github: "https://github.com/sjamcsclub/jamhacks.ca",
    devpost: null,
    site: "https://jamhacks.ca/",
    images: [JAMHacks],
    filters: [],
    tech: ["React.js", "Website"],
    featured: true,
  },
  {
    name: "Cheapreats",
    description: "I headed development for the Cheapreats home page",
    github: null,
    devpost: null,
    site: "https://www.cheapreats.com/",
    images: [Cheapreats],
    filters: [],
    tech: ["React.js", "Gatsby", "GraphQL", "Website"],
    featured: true,
  },
  {
    name: "Orderly Lifestyle",
    description: "A simple web app used to keep track of tasks",
    github: "https://github.com/KevinBoxuGao/Orderly-Lifestyle",
    devpost: null,
    site: "https://orderly-lifestyle.appspot.com",
    images: [OrderlyLifestyle1, OrderlyLifestyle2],
    filters: ["HTML5", "REST API", "Front-End", "Back-End"],
    tech: [
      "HTML5",
      "SASS",
      "Javscript",
      "JQuery",
      "Python",
      "Firebase",
      "Flask",
    ],
    featured: true,
  },
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
    filters: ["React.js", "Material-UI", "REST API", "Front-End"],
    tech: ["React.js", "Material-UI", "Javascript", "Python", "Flask"],
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
    filters: ["C#", "Python"],
    tech: ["C#", ".Net", "WPF", "Python", "Flask", "Front-End"],
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
    filters: ["React.js", "Bootstrap", "REST API"],
    tech: [
      "React.js",
      "Bootstrap",
      "Javascript",
      "Python",
      "Flask",
      "Front-End",
    ],
    featured: false,
  },
  {
    name: "FraudSense",
    description:
      "A mobile app that shows a Relational Neural Network powered algorithm which detects transaction fraud.",
    github: "https://github.com/KevinBoxuGao/FraudSense",
    devpost: "https://devpost.com/software/fraudsense",
    site: null,
    images: [FraudSense],
    filters: ["React Native", "Bootstrap", "REST API", "Front-End"],
    tech: [
      "React Native",
      "Bootstrap",
      "Javascript",
      "Node.js",
      "Python",
      "Flask",
    ],
    featured: false,
  },
  {
    name: "Generation of Electricity",
    description:
      "Website teaching how electricity is generated to incoming physics students in a generalized manner.",
    github: "https://github.com/KevinBoxuGao/Generation-of-Electricity",
    devpost: null,
    site: "https://kevinboxugao.github.io/Generation-of-Electricity/",
    images: [
      GenerationOfElectricity1,
      GenerationOfElectricity2,
      GenerationOfElectricity3,
    ],
    filters: ["React.js", "Bootstrap", "Front-End"],
    tech: ["React.js", "Bootstrap", "Javascript", "JQuery"],
    featured: false,
  },
  {
    name: "BlockTalk",
    description:
      "A decentralized messaging web app powered by the ethereum blockchain",
    github: "https://github.com/KevinBoxuGao/BlockTalk",
    devpost: "https://devpost.com/software/blocktalk-qns93j",
    site: null,
    images: [BlockTalk],
    filters: ["React.js", "Bootstrap", "Front-End"],
    tech: ["React.js", "Bootstrap", "Javascript", "Node.js"],
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
    filters: ["React Native", "REST API", "Front-End"],
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
    filters: ["React.js", "Front-End"],
    tech: ["React.js", "Javascript"],
    featured: false,
  },
  {
    name: "Green Route",
    description:
      "A web app that calculates for you the most environmentally friendly driving route between two destinations, taking into considerations such as elevation and speed.",
    github: "https://github.com/KevinBoxuGao/GreenRoute",
    devpost: "https://devpost.com/software/green-route",
    site: "https://green-route.appspot.com/",
    images: [GreenRoute1, GreenRoute2, GreenRoute3],
    filters: ["HTML5", "Bootstrap", "REST API", "Front-End"],
    tech: ["HTML5", "Bootstrap", "JQuery", "Javascript", "Python", "Flask"],
    featured: true,
  },
  {
    name: "ICS3UI",
    description:
      "Projects for the Grade 11 Canadian Computer Science Course at SJAM",
    github: "https://github.com/KevinBoxuGao/ICS3UI",
    devpost: null,
    side: null,
    images: [cs11, cs1, cs2, cs3],
    filters: ["Python"],
    tech: ["Python", "Tkinter"],
    featured: false,
  },
  {
    name: "History of The Camera",
    description: "My grade 10 physics project, a website all about the camera",
    github: "https://github.com/KevinBoxuGao/Physics-Project",
    devpost: null,
    side: "https://kevinboxugao.github.io/Physics-Project/",
    images: [TheCamera1, TheCamera2, TheCamera3],
    filters: ["HTML5", "Bootstrap", "Front-End"],
    tech: ["HTML5", "SASS", "Bootstrap", "Javascript", "JQuery"],
    featured: false,
  },
  {
    name: "SpentWeb",
    description: "An expense tracking web app",
    github: "https://github.com/KevinBoxuGao/Spent",
    devpost: "https://devpost.com/software/spent",
    site: "https://spentweb.appspot.com",
    images: [SpentWeb1, SpentWeb2],
    filters: ["HTML5", "REST API", "Front-End"],
    tech: ["HTML5", "SASS", "Python", "Firebase", "Flask"],
    featured: false,
  },
];

export default Projects;

import Projects from "./projects.js";

const featured = [
  ...Projects.filter(function (project) {
    return project.featured === true;
  }),
];

export default featured;

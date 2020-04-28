import React from "react";

function Portfolio(props) {
  const stuff = [1, 2, 3, 54];

  return (
    <div className="projects">
      {stuff.map((project) => {
        <div className="project_item">yes</div>;
      })}
    </div>
  );
}

export default Portfolio;

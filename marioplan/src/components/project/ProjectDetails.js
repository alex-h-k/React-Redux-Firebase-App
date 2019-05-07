import React from "react";

function ProjectDetails(props) {
  const id = props.match.params.id;
  return (
    <div className="container section project-details">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">Project Title - {id}</span>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum
            labore optio esse vero est laudantium nobis nisi pariatur blanditiis
            fuga quibusdam, iste sit perferendis non? Eaque corporis illum id
            fugit!
          </p>
        </div>
        <div className="card-action grey lighten-4 grey-text">
          <div>Posted by Alex</div>
          <div>6th May, 4:25pm</div>
        </div>
      </div>
    </div>
  );
}

export default ProjectDetails;

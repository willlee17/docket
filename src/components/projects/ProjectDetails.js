import React from 'react';

const ProjectDetails = (props) => {
  const id = props.match.params.id;
  return (
    <div className="container section project-details">
      <div className="card">
        <div className="card-content">
          <span className="card-title">Project Title = {id}</span>
          <p>Lorem Ipsum</p>
        </div>
        <div className="card-action grey">
          <div>Posted by William Lee</div>
          <div>January 9th</div>
        </div>
      </div>
    </div>
  )
}

export default ProjectDetails;

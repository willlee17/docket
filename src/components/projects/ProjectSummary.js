import React from 'react';

const ProjectSummary = ({project}) => {
  return (
    <div className="card project-summary">
      <div className="card-content grey-text">
        <span className="card-title">{project.title}</span>
        <p>Posted by the Net Ninja</p>
        <p className="grey-text">3rd September, 2am</p>
      </div>
    </div>
  )
}

export default ProjectSummary;

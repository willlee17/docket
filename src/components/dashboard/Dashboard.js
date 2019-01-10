import React, { Component } from 'react';
import Notifications from './Notifications';
import ProjectList from '../projects/ProjectList';
import { connect } from 'react-redux';

class Dashboard extends Component {
  render() {
    const { projects } = this.props;
      return (
        <div className="dashboard container">
          <div className="row">
          {/*for project list*/}
            <div className="col s12 m6">
              <ProjectList projects={projects}/>
            </div>
            {/*for notifications. offset by 1 to the right on medium sized screens*/}
            <div className="col s12 m5 offset-m1">
              <Notifications />
            </div>
          </div>
        </div>
      )
  }
}

const mapStateToProps = (state) => {
  return {
    projects: state.project.projects
  }
}

export default connect(mapStateToProps)(Dashboard);

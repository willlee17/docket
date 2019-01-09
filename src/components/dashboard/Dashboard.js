import React, { Component } from 'react';
import Notifications from './Notifications';
import ProjectList from '../projects/ProjectList';

class Dashboard extends Component {
  render() {
      return (
        <div className="dashboard container">
          <div className="row">
          {/*for project list*/}
            <div className="col s12 m6">
              <ProjectList />
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

export default Dashboard;

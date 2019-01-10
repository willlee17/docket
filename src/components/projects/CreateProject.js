import React, { Component } from 'react';
import { createProject } from '../../store/actions/projectActions';
import { connect } from 'react-redux';

class CreateProject extends Component {
  state = {
    title: '',
    content: '',
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.createProject(this.state);
  }

  render() {
    return (
        <div className="container">
          <form onSubmit={this.handleSubmit} className="white">
            <h5 className="grey-text">Create Project</h5>
            <div className="input-field">
              <label htmlFor="title">Title</label>
              <input onChange={this.handleChange} type="text" id="title"/>
            </div>
            <div className="input-field">
              <label htmlFor="content">Content</label>
              <textarea className="materialize-textarea" onChange={this.handleChange} id="content"></textarea>
            </div>
            <div className="input-field">
              <button className="btn pink">Create</button>
            </div>
          </form>
        </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    createProject: (project) => dispatch(createProject(project))
  }
}


export default connect(null, mapDispatchToProps)(CreateProject)

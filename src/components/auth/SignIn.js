import React, { Component } from 'react';

class SignIn extends Component {
  state = {
    email: '',
    password: '',
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value, 
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
  }

  render() {
    return (
        <div className="container">
          <form onSubmit={this.handleSubmit} className="white">
            <h5 className="grey-text">Sign In</h5>
            <div className="input-field">
              <label htmlFor="email">Email</label>
              <input onChange={this.handleChange} type="email" id="email"/>
            </div>
            <div className="input-field">
              <label htmlFor="password">Password</label>
              <input onChange={this.handleChange} type="password" id="password" />
            </div>
            <div className="input-field">
              <button className="btn pink">Login</button>
            </div>
          </form>
        </div>
    )
  }
}


export default SignIn

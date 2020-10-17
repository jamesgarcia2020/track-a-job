import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './LoginPage.css';
import userService from '../../utils/userService';

class LoginPage extends Component {
  
  state = {
    email: '',
    pw: ''
  };

  handleChange = (e) => {
    // Implement in an elegant way
    this.setState({
      // Using Computed Property Names
      [e.target.name]: e.target.value
    });
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await userService.login(this.state);
      this.props.handleSignupOrLogin();
      // Successfully signed up - show GamePage
      this.props.history.push('/');
    } catch (err) {
      // Do not alert in your projects,
      // show a modal or some UI instead
      alert('Invalid login');
    }
  }

  render() {
    return (
      <div className="main">
        <h1>Log In</h1>
        <form onSubmit={this.handleSubmit} >
          <div className="form-group">
            <label htmlFor="username">Username</label>
              <input id="username" type="email" className="form-control" value={this.state.email} name="email" onChange={this.handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
              <input type="password" className="form-control" id="password" value={this.state.pw} name="pw" onChange={this.handleChange} />
          </div>
          
            
              <button className="btn btn-primary">Log In</button>&nbsp;&nbsp;&nbsp;
              <Link to='/'>Cancel</Link>
            
          
        </form>
      </div>
    );
  }
}

export default LoginPage;

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import userService from '../../utils/userService';
import './SignupForm.css'

class SignupForm extends Component {

  state = {
    name: '',
    email: '',
    password: '',
    passwordConf: ''
  };

  handleChange = (e) => {
    this.props.updateMessage('');
    this.setState({
      // Using ES2015 Computed Property Names
      [e.target.name]: e.target.value
    });
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await userService.signup(this.state);
      this.props.handleSignupOrLogin();
      // Successfully signed up - show GamePage
      this.props.history.push('/');
    } catch (err) {
      // Invalid user data (probably duplicate email)
      this.props.updateMessage(err.message);
    }
  }

  isFormInvalid() {
    return !(this.state.name && this.state.email && this.state.password === this.state.passwordConf);
  }

  render() {
    return (
      <div className="main">
        <h1>Sign Up</h1>
        <form className="form-group" onSubmit={this.handleSubmit} >
          <div className="form-group">
          <label htmlFor="name">Name:</label>
              <input type="text" className="form-control" id='name' value={this.state.name} name="name" onChange={this.handleChange} />
            </div>
          
          <div className="form-group">
          <label htmlFor="email">Email:</label>
              <input type="email" className="form-control" id="email" value={this.state.email} name="email" onChange={this.handleChange} />
            </div>
          
          <div className="form-group">
          <label htmlFor="password">Password:</label>
              <input type="password" className="form-control" id="password" value={this.state.password} name="password" onChange={this.handleChange} />
            </div>
         
          <div className="form-group">
          <label htmlFor="password">Confirm Password:</label>
              <input type="password" className="form-control" id="password" value={this.state.passwordConf} name="passwordConf" onChange={this.handleChange} />
            </div>
          
          
            
              <button className="btn btn-default" disabled={this.isFormInvalid()}>Sign Up</button>&nbsp;&nbsp;
              <Link to='/'>Cancel</Link>
           
          
        </form>
      </div>
    );
  }
}

export default SignupForm;

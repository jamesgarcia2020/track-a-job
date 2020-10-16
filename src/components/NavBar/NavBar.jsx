import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';
const NavBar = (props) => {

    

  let nav = props.user ?
    <div>
    <Link to='/'>My Jobs</Link>
    &nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
      <Link to='/add' className='NavBar-link'>Add a Job</Link>
      &nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
      <Link to='' onClick={props.handleLogout} className='NavBar-link'>LOG OUT</Link>
      &nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
      <span className='NavBar-link'>Welcome, &nbsp;{props.user.name}</span>
      
    </div>
    :
    <div>
      <Link to='/login' className='NavBar-link'>LOG IN</Link>
      &nbsp;&nbsp;|&nbsp;&nbsp;
      <Link to='/signup' className='NavBar-link'>SIGN UP</Link>
    </div>;

  return (
    <div className='NavBar'>
      {nav}
      {/* <NavLink exact to='/'>Home</NavLink> */}
      {/* { props.user && <NavLink exact to='/add'>Add Tracker</NavLink> } */}
      {/* { props.user &&<NavLink exact to='/'>Tracker LIST</NavLink> } */}
    </div>
  );
};

export default NavBar;
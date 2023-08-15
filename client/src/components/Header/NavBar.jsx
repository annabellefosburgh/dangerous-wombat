import React from 'react';
import { Link } from 'react-router-dom';
import Auth from '../../utils/auth';

const NavBar = () => {
  return (
    <div className="home-container">
      <div className="navbar">
        <img className='logo' src='./assets/images/logo.svg'></img>
      <div>
          {Auth.loggedIn ? (
            <button className="pseudo" onClick={Auth.logout}>Logout</button>
        ) : (
        <div>
          <button className="psuedo stack"><Link to='/login'>Login</Link></button>
          <button className="psuedo stack"><Link to='/signup'>Sign Up</Link></button>
        </div>
          )}
      </div>
    </div>
    </div >
  );
}

export default NavBar;
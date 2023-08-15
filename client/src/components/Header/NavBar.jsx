import React from 'react';
import { Link } from 'react-router-dom';
import Auth from '../../utils/auth';

const NavBar = () => {
  return (
    <div className="home-container">
      <nav className="navbar">
        <a href="/">Logo</a>
        <ul>
          <li><Link to='/flashcards'>Flashcards</Link></li>
          <li><Link to='/quizzes'>Mock Tests</Link></li>
          <li><Link to='/podcasts'>Podcasts</Link></li>
          {!Auth.loggedIn ? (
            <li><button onClick={Auth.logout}>Logout</button></li>
          ) : (
            <div>
              <li><Link to='/login'>Login</Link></li>
              <li><Link to='/signup'>Sign Up</Link></li>
            </div>
          )}
        </ul>
      </nav>
    </div>
  );
}

export default NavBar;
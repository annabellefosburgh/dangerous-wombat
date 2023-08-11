import React from 'react';
import { Link } from 'react-router-dom';
import Auth from '../utils/auth';

const Home = () => {
  return (
    <div className="home-container">
      <nav className="navbar">
        <a href="/">Logo</a>
        <ul>
          <li><Link to='/flashcards'>Flashcards</Link></li>
          <li><Link to='/tests'>Mock Tests</Link></li>
          <li><Link to='/podcasts'>Podcasts</Link></li>
          {Auth.loggedIn ? (
            <li><button onClick={Auth.logout}>Logout</button></li>
          ) : (
            <div>
              <li><Link to='/login'>Login</Link></li>
              <li><Link to='/signup'>Sign Up</Link></li>
            </div>
          )}
        </ul>
      </nav>
      <main className="main-content">
        <h1>Welcome to FlashPrep!</h1>
        <p>Your personalized platform to prepare for interviews and tests using interactive flashcards.</p>
      </main>
      <footer className="footer">
        <p>&copy; 2023 FlashPrep. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
import React from 'react';
import '../App.css';

const Home = () => {
  return (
    <div className="home-container">
      <nav className="navbar">
        <a href="/">Logo</a>
        <ul>
          <li><a href="/flashcards">Flashcards</a></li>
          <li><a href="/tests">Mock Tests</a></li>
          <li><a href="/login">Login</a></li>
        </ul>
      </nav>
      <main className="main-content">
        <h1>Welcome to FlashPrep!</h1>
        <p>Your personalized platform to prepare for interviews and tests using interactive flashcards.</p>
        <a href="/login" className="get-started-btn">Get Started</a>
      </main>
      <footer className="footer">
        <p>&copy; 2023 FlashPrep. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default Home;

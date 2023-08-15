import React from 'react';
import "../node_modules/picnic/picnic.min.css";
import '../App.css'

const Home = () => {
  return (
    <div className="home-container flex">
      <nav className="navbar">
        <img className="logo" src='../assets/images/logo.svg' />
        <ul>
          <li><a href="/flashcards">Flashcards</a></li>
          <li><a href="/tests">Mock Tests</a></li>
          <li><a href="/login">Login</a></li>
        </ul>
      </nav>
      <main className="main-content flex">
        <h1>Welcome to FlashPrep!</h1>
        <p>Your personalized platform to prepare for interviews and tests using interactive flashcards.</p>
      </main>
      <footer className="footer">
        <p className="footer-p">&copy; 2023 TechPrep Pro. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
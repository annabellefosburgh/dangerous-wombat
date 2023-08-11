import React from 'react';
import '../App.css';

const Home = () => {
  return (
    <div className="home-container">
      <nav className="navbar flex items-center justify-between flex-wrap bg-airblue p-6">
        <ul>
          <li><a href="/flashcards" className="text-vandyke font-trirong">Flashcards</a></li>
          <li><a href="/tests" className="text-vandyke font-trirong">Mock Tests</a></li>
          <li><a href="/login" className="text-vandyke font-trirong">Login</a></li>
        </ul>
      </nav>
      <main className="main-content max-w-lg mx-auto bg-parchment shadow-md">
        <h1 className="font-roboto text-vandyke">Welcome to TechPrep Pro!</h1>
        <p className="font-work-sans text-vandyke">Your personalized platform to prepare for interviews and tests using interactive flashcards.</p>
        <a href="/login" className="get-started-btn bg-airblue hover:bg-timber text-vandyke font-roboto rounded-full">Get Started</a>
      </main>
      <footer className="footer bg-airblue rounded-lg shadow m-4">
        <p className="font-work-sans text-vandyke">&copy; 2023 TechPrep Pro. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
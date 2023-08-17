import React from 'react';

const Home = () => {
  return (
    <div className="home-container">
      <main className="main-content">
        <h1>Welcome to TechPrep Pro!</h1>
        <p>Your personalized platform to prepare for interviews and tests using interactive flashcards.</p>
          <div className="navigation">
          <div className="navbox-flash">
          <a className="linktext" href="/flashcards">Flashcards</a>
          </div>
          <div className="navbox-quiz">
          <a className="linktext" href="/quizzes">Mock Tests</a>
          </div>
          <div className="navbox-podcasts">
          <a className="linktext" href="/podcast">Podcast Resources</a>
          </div>
          </div>
      </main>
      <footer className="footer">
        <p className="footer-p">&copy; 2023 TechPrep Pro. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
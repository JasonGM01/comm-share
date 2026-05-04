import React from 'react';
import bottomImage from '../assets/all jobs.jpg';

function Home(){
return (
  <>
    <header className="App">
      <h1>Community Share - Needs & Skills</h1>
      <p>A trusted platform for sharing skills and requesting help within your community.</p>

      <div className="search-container">
        <div className="search-bar">
          <span className="search-icon">🔍</span>

          <input
            type="text"
            placeholder="Search for skills or requests..."
          />

          <button className="search-button"> Search </button>
        </div>
      </div>

       {/* Bottom image goes here */}
      <img
        src={bottomImage} 
        alt="All Jobs" 
        className="bottom-image"
      />
    </header>

    <div className="how-it-works">
      <h2>How It Works</h2>
      <p className="subtitle">
        Getting started is simple. Join, share, and connect with your community.
      </p>

      <div className="steps-container">

         <div className="step">
          <div className="icon">1</div>
          <h3>Join</h3>
          <p>Sign in to get started.</p>
        </div>

        <div className="step">
          <div className="icon">2</div>
          <h3>Share or Request</h3>
          <p>Offer your skills or request help.</p>
        </div>

        <div className="step">
          <div className="icon">3</div>
          <h3>Connect Safely</h3>
          <p>Coordinate with trusted members.</p>
        </div>
      </div>
    </div>
  </>
);
}

export default Home;
import React from 'react';

import bottomImage from '../assets/all jobs.jpg';

function Home({data}){
    return (
        <header className="App">

        <h1>Community Share - Needs & Skills</h1>
        <p>A trusted platform for sharing skills and requesting help within your community.</p>

      <div className="search-container">
        <input
          type="text"
          placeholder="Search for services or help..."
          className="search-bar"
        />
        <button className="search-button">Search</button>
      </div>

       {/* Bottom image goes here */}
      <img 
        src={bottomImage} 
        alt="All Jobs" 
        className="bottom-image"
      />


      </header>
      

    );
}

export default Home;

//test changes 
//retest 
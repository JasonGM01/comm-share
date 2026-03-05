import React from 'react';

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

      </header>
    );
}

export default Home;
//front
import React from 'react';
import './App.css';
import Navbar from "./components/NavBarComponents";

function App() {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch("/api")
    .then((res) => res.json())
    .then((data) => setData(data.message));
  }, []);
  
  return (
    <div className="App">
       <Navbar />

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
    </div>
  );
}

export default App;

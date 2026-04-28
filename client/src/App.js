//front
import React from 'react';
import './App.css';
import Navbar from "./components/NavBarComponents";
import {BrowserRouter} from 'react-router-dom';
import Pathing from "./components/Pathing";

function App() {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch("/api")
    .then((res) => res.json())
    .then((data) => setData(data.message));
  }, []);
  
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Pathing data={data}/>
      </BrowserRouter>
    </div>
  );
}

export default App;

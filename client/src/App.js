//front
import React from 'react';
import './App.css';
import Navbar from "./components/NavBarComponents";
import {BrowserRouter} from 'react-router-dom';
import Pathing from "./components/Pathing";

function App() {
  const [user, setUser] = React.useState(null);

  React.useEffect(() => {
    fetch("http://localhost:3001/api/me",{
      credentials: "include",
  })
    .then((res) => {
      if(!res.ok) return null
      return res.json();
    })
    .then((data) => setUser(data))
    .catch(() => setUser(null));
  }, []);
  
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar user={user} setUser={setUser}/>
        <Pathing user={user} setUser={setUser}/>
      </BrowserRouter>
    </div>
  );
}

export default App;

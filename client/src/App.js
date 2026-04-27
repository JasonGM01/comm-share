//front
import React from 'react';
import './App.css';
import Navbar from "./components/NavBarComponents";
import Pathing from "./components/Pathing";
import Profile from "./components/profile";
import Login from "./components/login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);

  return (
    <Router>
      <div className="App">
        <Navbar />

        <Routes>
          {/* Main page */}
          <Route path="/" element={<Pathing data={data} />} />

          {/* Login page (ONLY here now) */}
          <Route path="/login" element={<Login />} />

          {/* Profile page */}
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
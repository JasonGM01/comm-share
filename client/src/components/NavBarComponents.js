import React from "react";
import "../App.css";
import {Link} from 'react-router-dom';


function Navbar() {
  return (
    <nav className="navbar">
    <span className="nav-logo">Community Share</span>

      <div className="nav-right">
        <Link to="/profile" className="nav-link">Profile</Link>
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/categories" className="nav-link">Browse Categories</Link>
        <Link to="/request" className="nav-link">Request Service</Link>
        <Link to="/offer" className="nav-link">Offer Service</Link>
        <Link to="/login" className="loginButton">Sign Up/Login</Link>
        
      </div>
    </nav>
  );
}

export default Navbar;
import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

function Navbar({ user }) {
  return (
    <nav className="navbar">
      <span className="nav-logo">Community Share</span>

      <div className="nav-right">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/categories" className="nav-link">Browse Categories</Link>
<<<<<<< Updated upstream

        {user && (
          <>
            <Link to="/request" className="nav-link">Request Service</Link>
            <Link to="/offer" className="nav-link">Offer Service</Link>
            <Link to="/profile" className="loginButton">Profile</Link>
          </>
        )}

        {!user && (
          <Link to="/login" className="loginButton">Sign Up/Login</Link>
        )}
=======
        <Link to="/request" className="nav-link">Request Service</Link>
        <Link to="/offer" className="nav-link">Offer Service</Link>
        <Link to="/login" className="loginButton">Sign Up/Login</Link>
        <Link to="/profile" className="nav-link">Profile</Link>
>>>>>>> Stashed changes
      </div>
    </nav>
  );
}

export default Navbar;
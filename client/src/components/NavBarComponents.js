import React from "react";
import "../App.css";

function Navbar() {
  return (
    <nav className="navbar">
    <span className="nav-logo">Community Share</span>

      <div className="nav-right">
        <a href="/" className="nav-link">Home</a>
        <a href="/categories" className="nav-link">Browse Categoriesdir
        </a>
        <a href="/request" className="nav-link">Request Service</a>
        <a href="/offer" className="nav-link">Offer Service</a>
        <a href="/login" className="loginButton">Sign Up/Login</a>
      </div>
    </nav>
  );
}

export default Navbar;
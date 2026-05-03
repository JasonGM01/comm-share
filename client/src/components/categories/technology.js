import React from "react";
import { useNavigate } from "react-router-dom";
import "./Categories.css";

import techMain from "./images/technology/techMain.jpeg"
import devImg from "./images/technology/deviceSetup.jpeg";
import wifiImg from "./images/technology/wifiSetup.jpeg";
import deskImg from "./images/technology/desktopHelp.jpeg";
import phoneImg from "./images/technology/phoneHelp.jpeg";

import { Link } from "react-router-dom";

function Technology() {
  const navigate = useNavigate();

  return (
    <div className="subcategory-page">
      <section
      className="categories-hero"
        style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.45)), url(${techMain})`   
        }}>
        <div className="subcategory-hero-content">
          <h1>Technology Help</h1>
          <p>
            Connecting you with trusted tech help in your community.
          </p>
        </div>
      </section>


      <div className="breadcrumbs">
        <Link to="/">Home</Link>
        <span> &gt; </span>
        <Link to="/categories">Browse Categories</Link>
        <span> &gt; </span>
        <span className="current">Technology</span>
        </div>

      <section className="subcategory-content-section">
        <h2>Explore Technology Help</h2>

        <div className="subcategory-grid">
          <div className="subcategory-card">
            <img
            src={devImg}
            alt="Device Setup"
            className="subcategory-image"
            />
            <h3>Device Setup</h3>
            <p>
              Get help installing and starting your new device!
            </p>
            <ul>
              <li>Setup a new phone or laptop</li>
              <li>Installing and connecting (Printers, Desktops,... etc)</li>
              <li>Initial Configuations</li>
              <li>Installing an app or creating an account</li>
            </ul>
          </div>

          <div className="subcategory-card">
            <div className="subcategory-image-box wifi-box">
              <img
              src={wifiImg}
              alt="Device Setup"
              className="subcategory-image"
              />
            </div>
            <h3>Wifi & Internet Issues</h3>
            <p>
              Fix connection problems and improve your internet setup.
            </p>
            <ul>
              <li>Troubleshooting slow WIFI</li>
              <li>Router setup and reset</li>
              <li>Fixing Connection Drops</li>
              <li>Extending WiFi range</li>
            </ul>
          </div>

          <div className="subcategory-card">
            <div className="subcategory-image-box computer-box">
              <img
              src={deskImg}
              alt="Computer Troubleshooting"
              className="subcategory-image"
              />  
            </div>
            <h3>Computer Troubleshooting</h3>
            <p>
              Solve common computer problems and performace issues
            </p>
            <ul>
              <li>Fix slowing computers</li>
              <li>Remove viruses/malware</li>
              <li>System updates</li>
              <li>Upgrade old hardware</li>
            </ul>
          </div>

          <div className="subcategory-card">
            <div className="subcategory-image-box computer-box">
              <img
              src={phoneImg}
              alt="Phone & App Help"
              className="subcategory-image"
              />
            </div>
            <h3>Phone & App Help</h3>
            <p>
              Get help using apps and managing your mobile device.
            </p>
            <ul>
              <li>Setting up emails or apps</li>
              <li>Managing Storage</li>
              <li>Fixing app crashes</li>
              <li>Notifications and settings</li>
            </ul>
          </div>
        </div>


      </section>

      <section className="categories-bottom-actions">
        <h2>Need help or ready to help?</h2>
        <p>
          Post a request for technology help or offer your skills to others in
          your community.
        </p>

        <div className="categories-action-buttons">
          <button
            className="request-btn"
            onClick={() => navigate("/request")}
          >
            Request Help
          </button>

          <button
            className="offer-btn"
            onClick={() => navigate("/offer")}
          >
            Offer a Service
          </button>
        </div>
      </section>
    </div>
  );
}

export default Technology;
import React from "react";
import { useNavigate } from "react-router-dom";
import "./Categories.css";

import vehicleMain from "./images/vehicle/vechicleMain.jpeg"
import rideImg from "./images/vehicle/rideshare.jpeg";
import maintImg from "./images/vehicle/maintenance.jpeg";
import troubleImg from "./images/vehicle/troubleshoot.jpeg";


import { Link } from "react-router-dom";

function Vehicle() {
  const navigate = useNavigate();

  return (
    <div className="subcategory-page">
      <section
      className="categories-hero"
        style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.45)), url(${vehicleMain})`   
        }}>
        <div className="subcategory-hero-content">
          <h1>Rides & Vehicle Help</h1>
          <p>
            Transportation support and basic car assistance when you need it.
          </p>
        </div>
      </section>


      <div className="breadcrumbs">
        <Link to="/">Home</Link>
        <span> &gt; </span>
        <Link to="/categories">Browse Categories</Link>
        <span> &gt; </span>
        <span className="current">Rides & Vehicle Help</span>
        </div>

      <section className="subcategory-content-section">
        <h2>Explore Rides & Vehicle Help</h2>

        <div className="subcategory-grid">
          <div className="subcategory-card">
            <img
            src={rideImg}
            alt="Device Setup"
            className="subcategory-image"
            />
            <h3>Rides & Vehicle Help</h3>
            <p>
              Get where you need to go with help from others.
            </p>
            <ul>
              <li>Rides to appointments</li>
              <li>Grocery trips</li>
              <li>Airport drop-off/pickup</li>
              <li>Local transportation</li>
            </ul>
          </div>

          <div className="subcategory-card">
            <div className="subcategory-image-box wifi-box">
              <img
              src={maintImg}
              alt="Car Maintenancep"
              className="subcategory-image"
              />
            </div>
            <h3>Car Maintenance</h3>
            <p>
              Assist with simple upkeep and maintenance.
            </p>
            <ul>
              <li>Oil Changes</li>
              <li>Checking fluids</li>
              <li>Battery and bulb replacement</li>
              <li>Car washing & detailing</li>
            </ul>
          </div>

          <div className="subcategory-card">
            <div className="subcategory-image-box computer-box">
              <img
              src={troubleImg}
              alt="Vehicle Troubleshooting"
              className="subcategory-image"
              />  
            </div>
            <h3>Vehicle Troubleshooting</h3>
            <p>
              Solve common automobile problems and issues.
            </p>
            <ul>
              <li>Jump start dead battery</li>
              <li>Change a flat tire</li>
              <li>Locked out of car</li>
              <li>Roadside assistance help</li>
            </ul>
          </div>
        </div>


      </section>

      <section className="categories-bottom-actions">
        <h2>Need help or ready to help?</h2>
        <p>
          Post a request for vehicle assistance or offer your skills to others in
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

export default Vehicle;
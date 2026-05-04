import React from "react";
import { useNavigate } from "react-router-dom";
import "./Categories.css";

import homeMain from "./images/home-services/homeMain.jpeg"
import cleanImg from "./images/home-services/homeClean.jpeg";
import furnImg from "./images/home-services/furnAsem.jpeg";
import yardImg from "./images/home-services/yardWork.jpeg";
import repairImg from "./images/home-services/minorRepair.jpeg";

import { Link } from "react-router-dom";

function HomeServices() {
  const navigate = useNavigate();

  return (
    <div className="subcategory-page">
      <section 
        className="categories-hero"
        style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.45)), url(${homeMain})`   
        }}
        >
        <div className="subcategory-hero-content">
          <h1>Home Services</h1>
          <p>
            Find help with everyday household tasks, home upkeep, and practical
            support around the house.
          </p>
        </div>
      </section>


      <div className="breadcrumbs">
        <Link to="/">Home</Link>
        <span> &gt; </span>
        <Link to="/categories">Browse Categories</Link>
        <span> &gt; </span>
        <span className="current">Home Services</span>
        </div>

      <section className="subcategory-content-section">
        <h2>Explore Home Service Types</h2>

        <div className="subcategory-grid">
          <div className="subcategory-card">
            <img
            src={cleanImg}
            alt="Cleaning"
            className="subcategory-image"
            />
            <h3>Cleaning</h3>
            <p>
              Help with keeping living spaces clean, organized, and comfortable.
            </p>
            <ul>
              <li>Kitchen cleaning</li>
              <li>Bathroom cleaning</li>
              <li>Vacuuming and mopping</li>
              <li>General tidying</li>
            </ul>
          </div>

          <div className="subcategory-card">
            <div className="subcategory-image-box furniture-box">
              <img
              src={furnImg}
              alt="Furnitur Assembly"
              className="subcategory-image"
              />
            </div>
            <h3>Furniture Assembly</h3>
            <p>
              Get help putting together furniture and setting up household items.
            </p>
            <ul>
              <li>Bed frames</li>
              <li>Bookshelves</li>
              <li>Desks and tables</li>
              <li>Storage units</li>
            </ul>
          </div>

          <div className="subcategory-card">
            <div className="subcategory-image-box yard-box">
              <img
              src={yardImg}
              alt="Yard Work"
              className="subcategory-image"
              />
            </div>
            <h3>Yard Work</h3>
            <p>
              Outdoor help for basic lawn care and garden maintenance tasks.
            </p>
            <ul>
              <li>Mowing lawns</li>
              <li>Raking leaves</li>
              <li>Pulling weeds</li>
              <li>Watering plants</li>
            </ul>
          </div>

          <div className="subcategory-card">
            <div className="subcategory-image-box repairs-box">
              <img
              src={repairImg}
              alt="Minor Repair"
              className="subcategory-image"
              />
            </div>
            <h3>Minor Repairs</h3>
            <p>
              Assistance with small household fixes and general maintenance.
            </p>
            <ul>
              <li>Fixing loose shelves</li>
              <li>Changing light bulbs</li>
              <li>Hanging curtains</li>
              <li>Basic touch-ups</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="categories-bottom-actions">
        <h2>Need help or ready to help?</h2>
        <p>
          Post a request for home services or offer your skills to others in
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

export default HomeServices;
import React from "react";
import { useNavigate } from "react-router-dom";
import "./Categories.css";

import errandMain from "./images/errands/errandMain.jpeg";
import grocImg from "./images/errands/grocery.jpeg";
import delivImg from "./images/errands/delivery.jpeg";
import assitImg from "./images/errands/assistance.jpeg";
import moveImg from "./images/errands/moving.jpeg";

import { Link } from "react-router-dom";

function Errands() {
  const navigate = useNavigate();

  return (
    <div className="subcategory-page">
      <section 
      className="categories-hero"
      style={{
      backgroundImage: `linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.45)), url(${errandMain})`
      }}
      >
        <div className="subcategory-hero-content">
          <h1>Errands & Assitance</h1>
          <p>
            Find help with everyday in subjects like mathmatics, and science, or learn a new skill!
          </p>
        </div>
      </section>


      <div className="breadcrumbs">
        <Link to="/">Home</Link>
        <span> &gt; </span>
        <Link to="/categories">Browse Categories</Link>
        <span> &gt; </span>
        <span className="current">Errands</span>
        </div>

      <section className="subcategory-content-section">
        <h2>Explore help with Errands </h2>

        <div className="subcategory-grid">
          <div className="subcategory-card">
            <img
            src={grocImg}
            alt="Grocery & Shopping"
            className="subcategory-image"
            />
            <h3>Grocery & Shopping</h3>
            <p>
              Get help picking up everyday essentials and running store errands.
            </p>
            <ul>
              <li>Grocery shopping</li>
              <li>Picking up household items</li>
              <li>Running store errands</li>
              <li>Buying last-minute items</li>
            </ul>
          </div>

          <div className="subcategory-card">
            <div className="subcategory-image-box turtoring-box">
              <img
              src={delivImg}
              alt="Grocery & Shopping"
              className="subcategory-image"
              />
            </div>
            <h3>Pickup & Delivery</h3>
            <p>
              Have items picked up or dropped off quickly
            </p>
            <ul>
              <li>Package pickup</li>
              <li>Food Delivery</li>
              <li>Item drop off</li>
              <li>Purchase returns</li>
            </ul>
          </div>

          <div className="subcategory-card">
            <div className="subcategory-image-box repairs-box">
              <img
              src={assitImg}
              alt="Personal Assitance"
              className="subcategory-image"
              />
            </div>
            <h3>Personal Assistance</h3>
            <p>
              Extra help with daily tasks and organization.
            </p>
            <ul>
              <li>Scheduling appointments</li>
              <li>Offerrganization</li>
              <li>Making calls or bookings</li>
              <li>Task Reminders</li>
            </ul>
          </div>

          <div className="subcategory-card">
            <div className="subcategory-image-box repairs-box">
              <img
              src={moveImg}
              alt="Moving & Towing"
              className="subcategory-image"
              />
            </div>
            <h3>Moving and Towing</h3>
            <p>
              Get help transporting items or moving from place to place.
            </p>
            <ul>
              <li>Moving furniture</li>
              <li>Towing assistance</li>
              <li>Loading/unloading heavy objects</li>
              <li>Helping with small moves</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="categories-bottom-actions">
        <h2>Need help or ready to help?</h2>
        <p>
          Post a request for errands help or offer your skills to others in
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

export default Errands;
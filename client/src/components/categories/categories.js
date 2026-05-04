import React from "react";
import { useNavigate } from "react-router-dom";
import "./Categories.css";

import catMain from "./images/categories_main.jpeg";
import homeImg from "./images/home_sub.jpeg"
import eduImg from "./images/education_sub.jpeg";
import techImg from "./images/technology_sub.jpeg";
import errImg from "./images/errand_sub.jpeg";
import vehImg from "./images/vehicle_sub.jpeg";

function Categories() {
  const navigate = useNavigate();

  return (
    <div className="categories-page">
      <section
        className="categories-hero"
        style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.45)), url(${catMain})`
        }}
        >
        <div className="categories-hero-content">
          <h1>Browse Categories</h1>
          <p>
            Explore the types of help and services available in your community.
          </p>
        </div>
      </section>

      <section className="subcategory-section">
        <h2>Explore the Services our Community Offers</h2>

        <div className="subcategory-grid">
          <div className="subcategory-card">
            <img
              src={homeImg}
              alt="Home Services"
              className="subcategory-image"
              onClick={() => navigate("/categories/home-services")}
            />

            <h3 onClick={() => navigate("/categories/home-services")}>
              Home Services
            </h3>

            <p>
              Help with home-related tasks that make everyday living easier and
              more manageable.
            </p>

            <ul>
              <li>Cleaning</li>
              <li>Furniture assembly</li>
              <li>Yard work</li>
              <li>Minor repairs</li>
            </ul>
          </div>

          <div className="subcategory-card">
            <img
              src={eduImg}
              alt="Education & Tutoring"
              className="subcategory-image"
              onClick={() => navigate("/categories/education")}
            />

            <h3 onClick={() => navigate("/categories/education")}>
              Education & Tutoring
            </h3>

            <p>
              Academic help and learning support for students and lifelong learners.
            </p>

            <ul>
              <li>Math tutoring</li>
              <li>Essay support</li>
              <li>Language learning</li>
              <li>Test preparation</li>
            </ul>
          </div>

          <div className="subcategory-card">
            <img
              src={techImg}
              alt="Technology Help"
              className="subcategory-image"
              onClick={() => navigate("/categories/technology")}
            />

            <h3 onClick={() => navigate("/categories/technology")}>
              Technology Help
            </h3>

            <p>
              Support for everyday tech issues, setup, and troubleshooting.
            </p>

            <ul>
              <li>WiFi setup</li>
              <li>Computer help</li>
              <li>Phone setup</li>
              <li>App troubleshooting</li>
            </ul>
          </div>

          <div className="subcategory-card">
            <img
              src={errImg}
              alt="Errands & Assistance"
              className="subcategory-image"
              onClick={() => navigate("/categories/errands")}
            />

            <h3 onClick={() => navigate("/categories/errands")}>
              Errands & Assistance
            </h3>

            <p>
              Help with practical daily tasks and general assistance around the community.
            </p>

            <ul>
              <li>Grocery pickup</li>
              <li>Package drop-off</li>
              <li>Prescription pickup</li>
              <li>Personal assistance</li>
            </ul>
          </div>

          <div className="subcategory-card">
            <img
              src={vehImg}
              alt="Rides & Vehicle Helpn"
              className="subcategory-image"
              onClick={() => navigate("/categories/vehicle")}
            />

            <h3 onClick={() => navigate("/categories/vehicle")}>
              Rides & Vehicle Help
            </h3>

            <p>
              Get help with rides, driving, and everyday vehicle issues.
            </p>

            <ul>
              <li>Local Transportation</li>
              <li>Vehicle Maintence</li>
              <li>Car Troubleshooting</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="categories-bottom-actions">
        <h2>Ready to get started?</h2>
        <p>
          Whether you need support or want to help someone else, you can take
          the next step here.
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

export default Categories;
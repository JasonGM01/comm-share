import React from "react";
import { useNavigate } from "react-router-dom";
import "./Categories.css";

import eduMain from "./images/education/edu_main.jpeg";
import hwImg from "./images/education/hw_help.jpeg";
import tutImg from "./images/education/tutor_help.jpeg";
import skillImg from "./images/education/skill.jpeg";

import { Link } from "react-router-dom";

function Education() {
  const navigate = useNavigate();

  return (
    <div className="subcategory-page">
      <section
              className="categories-hero"
              style={{
              backgroundImage: `linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.45)), url(${eduMain})`
              }}
              >
            
        <div className="subcategory-hero-content">
          <h1>Educational Help</h1>
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
        <span className="current">Education</span>
        </div>

      <section className="subcategory-content-section">
        <h2>Explore Educational Help</h2>

        <div className="subcategory-grid">
          <div className="subcategory-card">
            <img 
              src={hwImg}
              alt="Homework Help"
              className="subcategory-image"
              />
          
            <h3>Homework Help</h3>
            <p>
              Help with homework in various subjects.
            </p>
            <ul>
              <li>Mathematics</li>
              <li>Social Studies</li>
              <li>Sciences</li>
              <li>Language</li>
            </ul>
          </div>

          <div className="subcategory-card">
            <div className="subcategory-image-box turtoring-box">
              <img 
              src={tutImg}
              alt="Tutoring"
              className="subcategory-image"
              />
            </div>
            <h3>Tutoring</h3>
            <p>
              Struggling with a subject? Get tutoring help.
            </p>
            <ul>
              <li>All varities of subjects</li>
              <li>Get 1 on 1 help</li>
              <li>Exam Preperation</li>
              <li>See improvements over time</li>
            </ul>
          </div>

          <div className="subcategory-card">
            <div className="subcategory-image-box repairs-box">
              <img 
              src={skillImg}
              alt="New Skill"
              className="subcategory-image"
              />
            </div>
            <h3>Learn a New Skill</h3>
            <p>
              Ready to try out something new? People are ready to help you out.
            </p>
            <ul>
              <li>Learn how to cook.</li>
              <li>Learn how to use basic everyday tools</li>
              <li>Start learning a new language </li>
              <li>etc</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="categories-bottom-actions">
        <h2>Need help or ready to help?</h2>
        <p>
          Post a request for educational help or offer your skills to others in
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

export default Education;
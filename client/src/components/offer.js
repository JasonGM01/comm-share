import React, { useState } from "react";
import "./../App.css";

function Offer() {
  const [formData, setFormData] = useState({
    skill: "",
    description: "",
    category: "",
    serviceType: "volunteer",
    toolsProvided: "",
  });

  const categories = [
    "Tech Support",
    "Tutoring",
    "Carpentry",
    "Transportation",
    "Gardening",
    "Roofing",
    "Plumbing",
    "Moving Assistance",
    "DIY Guidance",
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Submitted Offer:", formData);

    alert("Your offer has been submitted!");

    // OPTIONAL: Reset form after submit
    setFormData({
      skill: "",
      description: "",
      category: "",
      serviceType: "volunteer",
      toolsProvided: "",
    });
  };

  return (
    <div className="offer-wrapper">

      {/* SIDE IMAGES */}
      <img src="/images/mechanic.jpg" className="side-img left-img-1" alt="" />
      <img src="/images/gardener.jpg" className="side-img left-img-2" alt="" />
      <img src="/images/computer_repair.jpg" className="side-img right-img-1" alt="" />
      <img src="/images/cleaning.jpg" className="side-img right-img-2" alt="" />

      {/* MAIN CONTENT */}
      <div className="offer-content">
        <h1>Offer Your Skills</h1>
        <p>Share your skills with the community and help someone in need.</p>

        <form onSubmit={handleSubmit} className="offer-form">

          <label>Skill / Service Title</label>
          <input
            type="text"
            name="skill"
            placeholder="e.g., Computer Repair, Gardening Help"
            value={formData.skill}
            onChange={handleChange}
            required
          />

          <label>Description</label>
          <textarea
            name="description"
            placeholder="Describe what you can help with"
            value={formData.description}
            onChange={handleChange}
            required
            rows={4}
          />

          <label>Category</label>
          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
            required
          >
            <option value="">Select a category</option>
            {categories.map((cat) => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>

          <label>Service Type</label>
          <div className="radio-group">
            <label>
              <input
                type="radio"
                name="serviceType"
                value="volunteer"
                checked={formData.serviceType === "volunteer"}
                onChange={handleChange}
              />
              Volunteer
            </label>

            <label>
              <input
                type="radio"
                name="serviceType"
                value="paid"
                checked={formData.serviceType === "paid"}
                onChange={handleChange}
              />
              Paid
            </label>
          </div>

          <label>Tools You Can Provide (optional)</label>
          <input
            type="text"
            name="toolsProvided"
            placeholder="e.g., drill, ladder, toolbox"
            value={formData.toolsProvided}
            onChange={handleChange}
          />

          <button type="submit" className="offer-submit-btn">
            Submit Offer
          </button>

        </form>
      </div>
    </div>
  );
}

export default Offer;
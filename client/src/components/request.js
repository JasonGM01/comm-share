import React, { useState } from "react";
import "./../App.css";

function Request() {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: "",
    serviceType: "volunteer",
    tools: "",
    video: null,
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
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Help Request Submitted:", formData);
    alert("Your help request has been submitted!");
  };

  return (
    <div className="App">
      <h1>Request a Service</h1>

      <p>Tell the community what kind of help or skill you’re looking for.</p>

      <form
        onSubmit={handleSubmit}
        style={{ maxWidth: "500px", margin: "0 auto", textAlign: "left" }}
      >
        <label>Title</label>
        <input
          type="text"
          name="title"
          placeholder="Short summary of your issue"
          value={formData.title}
          onChange={handleChange}
          required
        />

        <label>Description</label>
        <textarea
          name="description"
          placeholder="Describe the issue in detail"
          value={formData.description}
          onChange={handleChange}
          required
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
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>

        <label>Service Type</label>
        <div style={{ marginBottom: "10px" }}>
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

          <label style={{ marginLeft: "20px" }}>
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

        <label>Tools Needed (optional)</label>
        <input
          type="text"
          name="tools"
          placeholder="e.g., wrench, ladder, drill"
          value={formData.tools}
          onChange={handleChange}
        />

        <label>Upload Video (optional)</label>
        <input
          type="file"
          name="video"
          accept="video/*"
          onChange={handleChange}
        />

        <button type="submit" style={{ marginTop: "20px" }}>
          Submit Request
        </button>
      </form>
    </div>
  );
}

export default Request;
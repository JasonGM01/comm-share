import "./../App.css";
import React from "react";

function Request() {
  const [requests, setRequests] = React.useState([]);
  const [title, setTitle] = React.useState("");
  const [desc, setDesc] = React.useState("");
  const [budget, setBudget] = React.useState("");
  const [category, setCategory] = React.useState("");
  const [availability, setAvailability] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [location, setLocation] = React.useState("");
  const [error, setError] = React.useState("");
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    async function fetchRequests() {
      try {
        const res = await fetch("http://localhost:3001/api/requests");

        if (!res.ok) {
          throw new Error("Failed to fetch requests");
        }

        const data = await res.json();
        setRequests(data);
      } catch (err) {
        console.error(err);
        setError("Could not load requests");
      } finally {
        setLoading(false);
      }
    }

    fetchRequests();
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:3001/api/requests", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          title,
          desc,
          budget,
          category,
          availability,
          location,
          email,
        }),
      });

      if (!res.ok) {
        throw new Error("Failed to process request");
      }

      const newRequest = await res.json();
      setRequests([...requests, newRequest]);

      setTitle("");
        setDesc("");
        setBudget("");
        setCategory("");
        setAvailability("");
    } catch (err) {
      console.error(err);
      setError("Could not process request");
    }
  }

  if (loading) {
    return <p>Loading requests...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
  <div className="request-page">
    <section className="request-hero">
      <h1>Request a Service</h1>
      <p>Post what you need help with so community members can offer support.</p>
    </section>

    {error && <p className="error-message">{error}</p>}

    <form className="request-form-card" onSubmit={handleSubmit}>
      <input type="text" placeholder="Request Title" value={title} onChange={(e) => setTitle(e.target.value)} required />
      <textarea placeholder="Describe what you need" value={desc} onChange={(e) => setDesc(e.target.value)} required />
      <input type="number" placeholder="Budget" value={budget} onChange={(e) => setBudget(e.target.value)} required />
      <input type="text" placeholder="Category" value={category} onChange={(e) => setCategory(e.target.value)} required />
      <input type="text" placeholder="Availability" value={availability} onChange={(e) => setAvailability(e.target.value)} required />
      <input type="email" placeholder="Contact Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
      <input type="text" placeholder="City" value={location} onChange={(e) => setLocation(e.target.value)} required />
      <button type="submit">Post Request</button>
    </form>

    <section className="requests-section">
      <h2>Service Requests</h2>

      {requests.length === 0 ? (
        <p className="empty-message">No requests available.</p>
      ) : (
        requests.map((request) => (
          <div key={request._id} className="request-card">
            <h3>{request.title}</h3>
            <p>{request.desc}</p>
            <p><strong>Budget:</strong> ${request.budget}</p>
            <p><strong>Category:</strong> {request.category}</p>
            <p><strong>Availability:</strong> {request.availability}</p>
            <p><strong>Status:</strong> {request.status || "open"}</p>
            <p><strong>Email:</strong> {request.email}</p>
            <p><strong>Location:</strong> {request.location}</p>
          </div>
        ))
      )}
    </section>
  </div>
);
}

export default Request;
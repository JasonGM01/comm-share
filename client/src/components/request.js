import "./../App.css";
import React from "react";

function Request() {
  const [requests, setRequests] = React.useState([]);
  const [title, setTitle] = React.useState("");
  const [desc, setDesc] = React.useState("");
<<<<<<< Updated upstream
  const [budget, setBudget] = React.useState("");
  const [category, setCategory] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [location, setLocation] = React.useState("");
=======
  const [rate, setRate] = React.useState("");
  const [category, setCategory] = React.useState("");
  const [availability, setAvailability] = React.useState("");
>>>>>>> Stashed changes
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
      const res = await fetch("http://localhost:3001/api/offers", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title,
          desc,
          rate,
          category,
          availability,
        }),
      });

      if (!res.ok) {
        throw new Error("Failed to create offer");
      }

      setTitle("");
      setDesc("");
      setRate("");
      setCategory("");
      setAvailability("");
    } catch (err) {
      console.error(err);
      setError("Could not create offer");
    }
  }

  if (loading) {
    return <p>Loading offers...</p>;
  }


  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:3001/api/requests/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title,
          desc,
          budget,
          category,
          location,
          email,
        }),
      });

      if (!res.ok) {
        throw new Error("Failed to create request");
      }

      const newRequest = await res.json();
      setRequests([...requests, newRequest]);

      setTitle("");
      setDesc("");
      setBudget("");
      setCategory("");
      setEmail("");
      setLocation("");
    } catch (err) {
      console.error(err);
      setError("Could not create request");
    }
  }

  if (loading) {
    return <p>Loading requests...</p>;
  }

  return (
<<<<<<< Updated upstream
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
      <input type="email" placeholder="Contact Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
      <input type="text" placeholder="City" value={location} onChange={(e) => setLocation(e.target.value)} required />
      <button type="submit">Post Request</button>
    </form>

    <section className="requests-section">
      <h2>Service Requests</h2>
=======
    <div>
      <h1>Service Requests</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Request Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <br />
>>>>>>> Stashed changes

        <textarea
          placeholder="Describe what you need"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
          required
        />
        <br />

        <input
          type="number"
          placeholder="Budget"
          value={rate}
          onChange={(e) => setRate(e.target.value)}
          required
        />
        <br />

        <input
          type="text"
          placeholder="Category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          required
        />
        <br />

        <input
          type="text"
          placeholder="Availability"
          value={availability}
          onChange={(e) => setAvailability(e.target.value)}
          required
        />
        <br />

        <input
          type="text"
          placeholder="Contact Email"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <br />
        <button type="submit">Post Offer</button>
      </form>
      {requests.length === 0 ? (
        <p className="empty-message">No requests available.</p>
      ) : (
        requests.map((request) => (
          <div key={request._id} className="request-card">
            <h3>{request.title}</h3>
            <p>{request.desc}</p>
            <p><strong>Budget:</strong> ${request.budget}</p>
<<<<<<< Updated upstream
            <p><strong>Category:</strong> {request.category}</p>
            <p><strong>Availability:</strong> {request.availability}</p>
            <p><strong>Status:</strong> {request.status || "open"}</p>
            <p><strong>Email:</strong> {request.email}</p>
            <p><strong>Location:</strong> {request.location}</p>
=======
            <p><strong>Status:</strong> {request.status}</p>
            <p>Email: {request.email}</p>

>>>>>>> Stashed changes
          </div>
        ))
      )}
    </section>
  </div>
);
}

export default Request;
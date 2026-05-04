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
      const res = await fetch("http://localhost:3000/api/requests", {
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
    <div>
      <h1>Service Requests</h1>

      {error && <p>{error}</p>}

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Request Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <br />

        <textarea 
        type="text"
        placeholder="Describe what you need"
        value={desc}
        onChange={(e) => setDesc(e.target.value)}
        required
        />
        <br />

        <input
        type="number"
        placeholder="Budget"
        value={budget}
        onChange={(e) => setBudget(e.target.value)}
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
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        />
        <br />
        <button type="submit">Post Request</button>
      </form>
      <hr />

      {requests.length === 0 ? (
        <p>No requests available</p>
      ) : (
        requests.map((request) => (
          <div
            key={request._id}
            style={{
              border: "1px solid #ccc",
              padding: "10px",
              marginBottom: "10px",
            }}
          >
            <h2>{request.title}</h2>
            <p>{request.desc}</p>
            <p><strong>Budget:</strong> ${request.budget}</p>
            <p><strong>Status:</strong> {request.status}</p>
            <p>Email: {request.email}</p>

          </div>
        ))
      )}
    </div>
  );
}

export default Request;
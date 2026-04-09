import "./../App.css";
import React from "react";

function Request() {
  const [requests, setRequests] = React.useState([]);
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
        setError("Could not load service requests");
      } finally {
        setLoading(false);
      }
    }

    fetchRequests();
  }, []);

  if (loading) {
    return <p>Loading requests...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div>
      <h1>Service Requests</h1>

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
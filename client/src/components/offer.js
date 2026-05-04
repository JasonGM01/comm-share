import React from "react";

function Offer() {
  const [offers, setOffers] = React.useState([]);
  const [title, setTitle] = React.useState("");
  const [desc, setDesc] = React.useState("");
  const [rate, setRate] = React.useState("");
  const [category, setCategory] = React.useState("");
  const [availability, setAvailability] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [location, setLocation] = React.useState("");
  const [error, setError] = React.useState("");
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    async function fetchOffers() {
      try {
        const res = await fetch("http://localhost:3001/api/offers");

        if (!res.ok) {
          throw new Error("Failed to fetch offers");
        }

        const data = await res.json();
        setOffers(data);
      } catch (err) {
        console.error(err);
        setError("Could not load offers");
      } finally {
        setLoading(false);
      }
    }

    fetchOffers();
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:3001/api/offers/create", {
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
          email,
          location,
        }),
      });

      if (!res.ok) {
        throw new Error("Failed to create offer");
      }

      const newOffer = await res.json();
      setOffers([...offers, newOffer]);

      setTitle("");
      setDesc("");
      setRate("");
      setCategory("");
      setAvailability("");
      setEmail("");
      setLocation("");
    } catch (err) {
      console.error(err);
      setError("Could not create offer");
    }
  }

  if (loading) {
    return <p>Loading offers...</p>;
  }

  return (
    <div className="offer-page">
      <section className="offer-hero">
        <h1>Offer a Skill</h1>
        <p>
          Share your skills with your community and help someone who needs
          support.
        </p>
      </section>

      {error && <p className="error-message">{error}</p>}

      <form className="offer-form-card" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Skill title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <br />

        <textarea
          placeholder="Describe your skill"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
          required
        />
        <br />

        <input
          type="number"
          placeholder="Hourly rate"
          value={rate}
          onChange={(e) => setRate(e.target.value)}
          required
        />
        <br />

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          required
        >
          <option value="">Select a category</option>
          <option value="Home Services">Home Services</option>
          <option value="Education & Tutoring">Education & Tutoring</option>
          <option value="Technology Help">Technology Help</option>
          <option value="Errands & Assistance">Errands & Assistance</option>
          <option value="Rides & Vehicle Help">Rides & Vehicle Help</option>
        </select>
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
          type="email"
          placeholder="Contact Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <br />

        <input
          type="text"
          placeholder="City"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          required
        />
        <br />

        <button type="submit">Post Offer</button>
      </form>

      <section className="offers-section">
        <h2>Available Offers</h2>

        {offers.length === 0 ? (
          <p className="empty-message">No offers available.</p>
        ) : (
          <div className="offer-list">
            {offers.map((offer) => (
              <div key={offer._id || offer.id} className="offer-card">
                <h3>{offer.title}</h3>
                <p>{offer.desc}</p>
                <p>
                  <strong>Rate:</strong> ${offer.rate}
                </p>
                <p>
                  <strong>Category:</strong> {offer.category}
                </p>
                <p>
                  <strong>Availability:</strong> {offer.availability}
                </p>
                <p>
                  <strong>Status:</strong> {offer.status || "open"}
                </p>
                <p>
                  <strong>Email:</strong> {offer.email}
                </p>
                <p>
                  <strong>Location:</strong> {offer.location}
                </p>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}

export default Offer;
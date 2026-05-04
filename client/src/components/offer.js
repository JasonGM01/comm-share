import React from "react";

function Offer() {
  const [offers, setOffers] = React.useState([]);
  const [title, setTitle] = React.useState("");
  const [desc, setDesc] = React.useState("");
  const [rate, setRate] = React.useState("");
  const [category, setCategory] = React.useState("");
  const [availability, setAvailability] = React.useState("");
  const [email, setEmail] = React.useState("");
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

      const newOffer = await res.json();
      setOffers([...offers, newOffer]);

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

  return (
    <div>
      <h1>Skill Offers</h1>

      {error && <p>{error}</p>}

      <form onSubmit={handleSubmit}>
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
        <button type="submit">Post Offer</button>
      </form>

      <hr />

      {offers.length === 0 ? (
        <p>No offers available.</p>
      ) : (
        offers.map((offer) => (
          <div
            key={offer.id}
            style={{
              border: "1px solid #ccc",
              padding: "10px",
              marginBottom: "10px",
            }}
          >
            <h2>{offer.title}</h2>
            <p>{offer.desc}</p>
            <p><strong>Rate:</strong> ${offer.rate}</p>
            <p><strong>Category:</strong> {offer.category}</p>
            <p><strong>Availability:</strong> {offer.availability}</p>
            <p><strong>Status:</strong> {offer.status}</p>
            <p><strong>Email:</strong> {offer.email}</p>
          </div>
        ))
      )}
    </div>
  );
}

export default Offer;
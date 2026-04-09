//server
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();
const PORT = 3001;

require("dotenv").config();

app.use(cors({ origin: "http://localhost:3000" }));
app.use(express.json());

const requestRoutes = require("./routes/requests");
const offerRoutes = require("./routes/offers");

app.use("/api/requests", requestRoutes);
app.use("/api/offers", offerRoutes);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected 🟢"))
  .catch((err) => console.error("MongoDB error 🔴", err));

app.get("/", (req, res) => {
  res.json({ message: "Hello from server" });
});

app.listen(PORT, () => {
  console.log(`server is listening on port ${PORT}`);
});
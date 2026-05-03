const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();
const PORT = 3001;

const User = require("./models/login");

app.use(cors({ origin: "http://localhost:3000" }));
app.use(express.json());

const requestRoutes = require("./routes/requests");
const offerRoutes = require("./routes/offers");

app.use("/api/requests", requestRoutes);
app.use("/api/offers", offerRoutes);

app.post("/signup", async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Create new user
    const user = new User({ email, password });
    await user.save();

    res.json(user);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user || user.password !== password) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    res.json(user);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

mongoose
  .connect(
    "mongodb+srv://jakisakilla_db_user:commshare123@commshare.pjq3n70.mongodb.net/?appName=commshare"
  )
  .then(() => console.log("MongoDB connected 🟢", mongoose.connection.name))
  .catch((err) => console.error("MongoDB error 🔴", err));

app.get("/", (req, res) => {
  res.json({ message: "Hello from server" });
});

app.listen(PORT, () => {
  console.log(`server is listening on port ${PORT}`);
});
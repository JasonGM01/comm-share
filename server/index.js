const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();
const PORT = 3001;

app.use(cors({ origin: "http://localhost:3000" }));
app.use(express.json());

const requestRoutes = require("./routes/requests");
const offerRoutes = require("./routes/offers");
const signupRoutes = require("./routes/signups");
const loginRoutes = require("./routes/login");

app.use("/api/requests", requestRoutes);
app.use("/api/offers", offerRoutes);
app.use("/api/signup", signupRoutes);
app.use("/api/login", loginRoutes);

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
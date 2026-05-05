const express = require("express");
const cors = require("cors");
const session = require("express-session");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();
const PORT = 3001;

app.use(cors(
  { origin: "http://localhost:3000", 
    credentials: true 
  }));
app.use(express.json());
app.use(
  session({
    secret: "your-secret-key",
    resave: false,
    saveUninitialized: false,
    cookie: {
      secure: false,
    },
  })
);

const requestRoutes = require("./routes/requests");
const offerRoutes = require("./routes/offers");
<<<<<<< Updated upstream
const signupRoutes = require("./routes/signups");
const loginRoutes = require("./routes/login");
const meRoutes = require("./routes/me");
const logoutRoutes = require("./routes/logout");

app.use("/api/requests", requestRoutes);
app.use("/api/offers", offerRoutes);
app.use("/api/signup", signupRoutes);
app.use("/api/login", loginRoutes);
app.use("/api/me", meRoutes);
app.use("/api/logout", logoutRoutes);

=======
const authRoutes = require("./routes/auth");

app.use("/api/requests", requestRoutes);
app.use("/api/offers", offerRoutes);
app.use("/api/auth", authRoutes);
>>>>>>> Stashed changes

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
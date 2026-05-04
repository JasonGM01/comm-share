const mongoose = require("mongoose");
require("dotenv").config();

const Request = require("./models/request");

const sampleRequests = [
  {
    title: "Fix leaking sink",
    desc: "Need someone to fix a leak under the sink",
    budget: 120,
    status: "open",
    email: "leakfix@example.com",
  },
  {
    title: "Yard cleanup",
    desc: "Need someone to help cut grass and garden",
    budget: 80,
    status: "open",
    email: "yardclean@example.com",
  },
];


async function seed() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to MongoDB");

    await Request.deleteMany({});
    await Request.insertMany(sampleRequests);

    console.log("Seed data inserted");
    process.exit(0);
  } catch (err) {
    console.error("Seeding error:", err);
    process.exit(1);
  }
}

seed();
const mongoose = require("mongoose");
require("dotenv").config();

const Offer = require("./models/offer");

const sampleOffers = [
  {
    title: "Math tutoring",
    desc: "Can help with algebra and calculus",
    rate: 25,
    category: "Tutoring",
    availability: "Weekends",
    status: "open",
    email: "tutor@example.com",
  },
  {
    title: "Yard work help",
    desc: "Available for mowing lawns and cleanup",
    rate: 20,
    category: "Outdoor Work",
    availability: "Evenings",
    status: "open",
    email: "yardhelp@example.com",
  },
];

async function seed() {
  try {
    console.log("Starting offer seed...");
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to MongoDB");

    await Offer.deleteMany({});
    await Offer.insertMany(sampleOffers);
    
    console.log("Offer seed data inserted");
    process.exit(0);
  } catch (err) {
    console.error("Seeding error:", err);
    process.exit(1);
  }
}

seed();
const mongoose = require("mongoose");

const offerSchema = new mongoose.Schema(
  {
    title: {type: String, required: true},
    desc: {type: String, required: true},
    rate: { type: Number, required: true },
    category: {type: String, required: true},
    availability: {type: String, required: true},
    status: { type: String, default: "open"},
    email: {type: String, required: true},
    city: {type: String, required: true},
  },
  { timestamps: true }
);

module.exports = mongoose.model("Offer", offerSchema);
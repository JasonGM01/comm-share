const mongoose = require("mongoose");

const requestSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    desc: { type: String, required: true },
    budget: { type: Number, required: true },
    status: { type: String, default: "open" },
    email: { type: String },
    availability: {type: String, default: "Open"},
    city: {type: String, required: true},
  },
  { timestamps: true }
);

module.exports = mongoose.model("Request", requestSchema);
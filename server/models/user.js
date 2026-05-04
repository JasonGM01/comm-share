const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: {type: String, required: false},
    about: {type: String, required: false},
    category: {type: String, required: false},
    email: {type: String, required: true},
    password: {type: String, required: true},
  },
  { timestamps: true }
);

module.exports = mongoose.models.User || mongoose.model("User", userSchema);
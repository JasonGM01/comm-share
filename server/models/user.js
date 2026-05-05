const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
<<<<<<< Updated upstream
    image: {type: String, default: "http://via.placeholder.com/150"},
    name: {type: String, required: false},
    about: {type: String, required: false},
    avail: {type: String, required: false},
    category: {type: String, required: false},
    zipCode: {type: Number, required: false},
    email: {type: String, required: true},
    password: {type: String, required: true},
=======
    fullName: { type: String, required: true, trim: true },
    email: { type: String, required: true, unique: true, trim: true, lowercase: true },
    passwordHash: { type: String, required: true },
>>>>>>> Stashed changes
  },
  { timestamps: true }
);

<<<<<<< Updated upstream
module.exports = mongoose.models.User || mongoose.model("User", userSchema);
=======
module.exports = mongoose.model("User", userSchema);
>>>>>>> Stashed changes

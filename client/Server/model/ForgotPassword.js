const mongoose = require("mongoose");

const forgotSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  newPassword: {
    type: String,
    required: true,
  },
  conPassword: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("forgat", forgotSchema);

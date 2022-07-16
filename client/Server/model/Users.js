const mongoose = require("mongoose");

const users = new mongoose.Schema({
  email: {
    type: String,
    unique: true,
    require: true,
  },
  name: {
    type: String,
    require: true,
  },
  password: {
    type: String,
    require: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});
const User = mongoose.model("user", users);
User.createIndexes();
module.exports = User;

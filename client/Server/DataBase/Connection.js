const mongoose = require("mongoose");

const DataBaseConnectionURI = "mongodb://localhost:27017/StudentsData";

const DatabaseConnection = () => {
  mongoose.connect(DataBaseConnectionURI, () => {
    console.log("Connection Successfully");
  });
};

module.exports = DatabaseConnection;

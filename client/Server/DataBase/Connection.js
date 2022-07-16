const mongoose = require("mongoose");

const DataBaseConnectionURI =
  "mongodb://localhost:27017/CollageRegisterStudents";

const DatabaseConnection = () => {
  mongoose.connect(DataBaseConnectionURI, () => {
    console.log("connection Successfully");
  });
};

module.exports = DatabaseConnection;

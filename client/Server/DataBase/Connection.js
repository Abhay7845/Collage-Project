const mongoose = require("mongoose");
const dotenv = require("dotenv");
const ENV = require("../../Server/.env");

// const DataBaseConnectionURI = "mongodb://localhost:27017/StudentsData";

dotenv.config(ENV);
const DataBaseConnectionURI = process.env.DATABASE;

const DatabaseConnection = () => {
  mongoose
    .connect(DataBaseConnectionURI, {
      useNewUrlParser: true,
      useUniFiedTopology: true,
    })
    .then(() => console.log("Connection Successfully"))
    .catch((error) => console.log("error==>", error));
};

module.exports = DatabaseConnection;

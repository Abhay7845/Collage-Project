const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const ENV = require("../Server/.env");
const app = express();
const connectTOdb = require("./DataBase/Connection");
connectTOdb();
app.use(express.json());
app.use(cors());
dotenv.config(ENV);
const PORT = process.env.PORT;

// Available Routes
app.use("/api/user", require("./routes/User"));

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});

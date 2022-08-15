const express = require("express");
const cors = require("cors");
const app = express();
const connectTOdb = require("./DataBase/Connection");
connectTOdb();
app.use(express.json());
app.use(cors());
const port = 5000;
// Available Routes
app.use("/api/user", require("./routes/User"));

app.listen(port);

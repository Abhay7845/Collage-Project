const express = require("express");
// const User = require("./model/Users");
const app = express();
const connectTOdb = require("./DataBase/Connection");
connectTOdb();
app.use(express.json());
const port = 5000;
// Available Routes
app.use("/api/user", require("./routes/User"));

app.listen(port);

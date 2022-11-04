var jwt = require("jsonwebtoken");
const JWT_SECRET = "AryanIsGoodBoy";

const fetchUser = (req, res, next) => {
  const token = req.header("Authorization");
  if (!token) {
    res.status(401).send({ error: "invalid token" });
  }
  try {
    const data = jwt.verify(token, JWT_SECRET);
    req.body.user = data.user;
    next();
  } catch (error) {
    console.log("error==>", error);
    res.status(401).send({ error: "user not found" });
  }
};

module.exports = fetchUser;

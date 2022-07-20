const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const User = require("../model/Users");
const { body, validationResult } = require("express-validator");
var jwt = require("jsonwebtoken");
var fetchUser = require("../middleware/FetchUser");

const JWT_SECRET = "AryanIsGoodBoy";
// REGISTER ROUTER :-1
router.post(
  "/register",
  [
    body("name", "FullName is required").isLength({ min: 3 }),
    body("email", "Enter valid Email").isEmail(),
    body("password", "Password is required").isLength({ min: 5 }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    try {
      let user = await User.findOne({ email: req.body.email });
      if (user) {
        return res.status(400).json({ massage: "email is already registered" });
      }

      const salt = await bcrypt.genSalt(10);
      const SecPassword = await bcrypt.hashSync(req.body.password, salt);
      // create users
      user = await User.create({
        name: req.body.name,
        email: req.body.email,
        password: SecPassword,
      });
      const data = {
        user: {
          id: user.id,
        },
      };

      const AuthToken = jwt.sign(data, JWT_SECRET);
      res.json({ AuthToken });
    } catch (error) {
      console.error(error.massage);
      res.status(500).send("some error accrued");
    }
  },
);

// LOGIN ROUTER :-2
router.post(
  "/login",
  [body("email").isEmail(), body("password").exists()],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { email, password } = req.body;
    try {
      let user = await User.findOne({ email });
      if (!user) {
        return res
          .status(400)
          .json({ error: "Sorry!  please register with us" });
      }
      const comparePassword = await bcrypt.compare(password, user.password);
      if (!comparePassword) {
        return res
          .status(400)
          .json({ error: "Sorry!  password dose not matched" });
      }
      const data = await {
        user: {
          id: user.id,
        },
      };
      const AuthToken = await jwt.sign(data, JWT_SECRET);
      res.json(AuthToken);
    } catch (error) {
      console.error(error.massage);
      res.status(500).send("some error accrued");
    }
  },
);

// FETCH USER DETAILS ROUTES -3
router.post("/fetchUser", fetchUser, async (req, res) => {
  try {
    userId = req.user.id;
    const user = await User.findById(userId).select("-password");
    res.send(user);
  } catch (error) {
    console.error(error.massage);
    res.status(500).send("some error accrued");
  }
});

module.exports = router;

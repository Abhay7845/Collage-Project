const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const User = require("../model/Users");
const AddUser = require("../model/AddUser");
const addUserValidation = require("../validation/addUser");
const registerValidation = require("../validation/Register");
const loginValidation = require("../validation/Login");
const { validationResult } = require("express-validator");
var jwt = require("jsonwebtoken");
var fetchUser = require("../middleware/FetchUser");

const JWT_SECRET = "AryanIsGoodBoy";

// REGISTER ROUTER :-1
router.post("/register", registerValidation, async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).send({ success: false, errors: errors.array() });
  }
  try {
    let user = await User.findOne({ email: req.body.email });
    if (user) {
      return res.status(400).json({
        success: false,
        massage: "sorry! Email is already registered",
      });
    }
    const salt = await bcrypt.genSalt(10);
    const SecPassword = await bcrypt.hashSync(req.body.password, salt);
    // create users
    user = await User.create({
      name: req.body.name,
      email: req.body.email,
      phone: req.body.phone,
      password: SecPassword,
    });
    const data = {
      user: user,
    };
    const token = jwt.sign(data, JWT_SECRET);
    res.send({
      success: true,
      message: "user registered successfully",
      user,
      token,
    });
  } catch (error) {
    console.log("error==>", error);
    res.status(500).send({ success: false, message: "user not register" });
  }
});

// LOGIN ROUTER :-2
router.post("/login", loginValidation, async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).send({ errors: errors.array() });
  }
  const { email, password } = req.body;
  try {
    let user = await User.findOne({ email });
    if (!user) {
      return res
        .status(400)
        .json({ success: false, error: "Sorry!  please register with us" });
    }
    const comparePassword = await bcrypt.compare(password, user.password);
    if (!comparePassword) {
      return res
        .status(400)
        .send({ success: false, error: "Sorry!  password dose not matched" });
    }
    const data = {
      user: user,
    };
    const token = await jwt.sign(data, JWT_SECRET);
    res.json({ success: true, message: "login successfully", user, token });
  } catch (error) {
    console.log("error==>", error);
    res.status(500).send("user doesn't login");
  }
});

// FETCH USER DETAILS ROUTES -3
router.get("/fetchUser", fetchUser, async (req, res) => {
  try {
    const userId = await req.body.user._id;
    const user = await User.findById(userId).select("-password");
    res.status(200).send({
      success: true,
      message: user ? "user fetched successfully" : "invalid token",
      data: user ? user : undefined,
    });
  } catch (error) {
    console.log("error==>", error);
    res.status(500).send("user not found");
  }
});

//ADD USER ROUTER - 4
router.post("/addUser", fetchUser, addUserValidation, async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).send({ success: false, errors: errors.array() });
  }
  try {
    const userId = await req.body.user._id;
    const {
      name,
      occupation,
      email,
      phone,
      country,
      state,
      city,
      postalCode,
      address,
    } = await req.body;
    const addUser = await AddUser.create({
      user: userId,
      name,
      occupation,
      email,
      phone,
      country,
      state,
      city,
      postalCode,
      address,
    });
    res
      .status(200)
      .send({ success: true, message: "user added successfully", addUser });
  } catch (error) {
    console.log("error==>", error);
    res.status(400).send({ success: false, message: "user not added" });
  }
});

// FETCH ADD USER DETAILS ROUTES -5
router.get("/fetchAddUser", fetchUser, async (req, res) => {
  try {
    let addUserData = await AddUser.find({ user: req.body.user });
    if (addUserData.length > 0) {
      res.status(200).send({
        success: true,
        message: "user fetched successfully",
        addUserData,
      });
    } else {
      res.status(400).json({ success: false, error: "add users Not Found" });
    }
  } catch (error) {
    console.log("error==>", error);
    res.status(400).send({ success: false, message: "user not found" });
  }
});

module.exports = router;

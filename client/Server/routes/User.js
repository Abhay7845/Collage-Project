const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const User = require("../model/Users");
const AddUser = require("../model/AddUser");
// const forgotSchema = require("../model/ForgotPassword");
const { body, validationResult } = require("express-validator");
var jwt = require("jsonwebtoken");
var fetchUser = require("../middleware/FetchUser");

const JWT_SECRET = "AryanIsGoodBoy";
// REGISTER ROUTER :-1
router.post(
  "/register",
  [
    body("name", "Full Name is required").isLength({ min: 3 }),
    body("email", "Enter valid Email").isEmail(),
    body("phone", "Enter valid Phone number").isLength({ min: 10 }),
    body("password", "Password is required").isLength({ min: 8 }),
  ],
  async (req, res) => {
    let success = null;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ success, errors: errors.array() });
    }
    try {
      let user = await User.findOne({ email: req.body.email });
      success = false;
      if (user) {
        return res
          .status(400)
          .json({ success, massage: "sorry! Email is already registered" });
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
        user: {
          id: user.id,
        },
      };

      const AuthToken = jwt.sign(data, JWT_SECRET);
      success = true;
      res.json({ success, AuthToken });
    } catch (error) {
      console.error(error.massage);
      res.status(500).send("some error accrued");
    }
  }
);

// LOGIN ROUTER :-2
router.post(
  "/login",
  [body("email").isEmail(), body("password").exists()],
  async (req, res) => {
    let success = false;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { email, password } = req.body;
    try {
      let user = await User.findOne({ email });
      if (!user) {
        success = false;
        return res
          .status(400)
          .json({ success, error: "Sorry!  please register with us" });
      }
      const comparePassword = await bcrypt.compare(password, user.password);
      if (!comparePassword) {
        success = false;
        return res
          .status(400)
          .json({ success, error: "Sorry!  password dose not matched" });
      }
      const data = await {
        user: {
          id: user.id,
        },
      };
      const AuthToken = await jwt.sign(data, JWT_SECRET);
      success = true;
      res.json({ success, AuthToken });
    } catch (error) {
      console.error(error.massage);
      res.status(500).send("some error accrued");
    }
  }
);

// FETCH USER DETAILS ROUTES -3
router.get("/fetchUser", fetchUser, async (req, res) => {
  try {
    userId = req.user.id;
    const user = await User.findById(userId).select("-password");
    res.send(user);
  } catch (error) {
    console.error(error.massage);
    res.status(500).send("some error accrued");
  }
});

//ADD USER ROUTER - 4
router.post(
  "/addUser",

  [
    body("name", "Name is required").isLength({ min: 3 }),
    body("occupation", "Occupation is required"),
    body("email", "Enter valid Email").isEmail(),
    body("phone", "Enter valid Phone number").isLength({ min: 10 }),
    body("country", "Country is required").isLength({ min: 1 }),
    body("state", "State is required").isLength({ min: 1 }),
    body("city", "City is required").isLength({ min: 1 }),
    body("postalCode", "Postal Code is required").isLength({ min: 6 }),
    body("address", "Address is required").isLength({ min: 4 }),
  ],
  async (req, res) => {
    let success = false;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ success, errors: errors.array() });
    }
    AddUser.create({
      name: req.body.name,
      occupation: req.body.occupation,
      email: req.body.email,
      phone: req.body.phone,
      country: req.body.country,
      state: req.body.state,
      city: req.body.city,
      postalCode: req.body.postalCode,
      address: req.body.address,
    })
      .then((addUser) => res.json(addUser))
      .catch((error) => console.log(error));
  }
);

// FETCH ADD USER DETAILS ROUTES -5
router.get("/fetchAddUser", async (req, res) => {
  let addUserData = await AddUser.find();
  let success = false;
  if (addUserData.length > 0) {
    res.send(addUserData);
  } else {
    res.status(400).json({ success, error: "AddUsers Not Found" });
  }
});

// FORGAT USER PASSWORD ROUTES -5
// router.post(
//   "/forgat/password",
//   [
//     body("email", "email is required").isEmail(),
//     body("newPassword", "new password is required"),
//     body("conPassword", "confirm password is required"),
//   ],
//   async (req, res) => {
//     let success = false;
//     const errors = validationResult(req);
//     if (!errors.isEmpty()) {
//       return res.status(400).json({ success, errors: errors.array() });
//     }
//     try {
//       let user = await forgotSchema.findOne({ email: req.body.email });
//       success = false;
//       if (!user) {
//         return res
//           .status(400)
//           .json({ success, message: "sorry email is not registered" });
//       }

//       const salt = await bcrypt.genSalt(10);
//       const SecPassword = await bcrypt.hashSync(req.body.password, salt);
//     } catch (error) {
//       console.error(error.massage);
//       res.status(500).send("some error accrued");
//     }
//   },
// );

module.exports = router;

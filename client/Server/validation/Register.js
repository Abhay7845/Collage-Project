const { body } = require("express-validator");

const registerValidation = [
  body("name", "Full Name is required").isLength({ min: 3 }),
  body("email", "Enter valid Email").isEmail().withMessage("not a valid email"),
  body("phone", "Enter valid Phone number")
    .isLength({ min: 10 })
    .withMessage("not a valid phone number"),
  body("password", "Password is required")
    .isLength({ min: 8 })
    .withMessage("not a valid password"),
];

module.exports = registerValidation;

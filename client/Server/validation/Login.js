const { body } = require("express-validator");

const loginValidation = [
  body("email").isEmail().withMessage("not a valid email"),
  body("password").exists().withMessage("not a valid email"),
];

module.exports = loginValidation;

const { body } = require("express-validator");

const addUserValidation = [
  body("name", "Name is required").isLength({ min: 3 }),
  body("occupation", "Occupation is required").isLength({ min: 3 }),
  body("email", "Enter valid Email").isEmail().withMessage("not a valid email"),
  body("phone", "Enter valid Phone number")
    .isLength({ min: 10 })
    .withMessage("not a valid phone number"),
  body("country", "Country is required").isLength({ min: 1 }),
  body("state", "State is required").isLength({ min: 1 }),
  body("city", "City is required").isLength({ min: 1 }),
  body("postalCode", "Postal Code is required").isLength({ min: 6 }),
  body("address", "Address is required").isLength({ min: 4 }),
];

module.exports = addUserValidation;

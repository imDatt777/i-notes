const express = require("express");
const router = express.Router();
const { body, validationResult } = require("express-validator");

// Importing Schema
const User = require("../models/User");

// Create a User using POST '/api/auth/'. Doesn't require Auth
router.post(
  "/",
  // validations
  [
    body("name", "Enter a valid user name").isLength({ min: 3 }),
    body("email", "Enter a valid user email").isEmail(),
    body("password", "Password must be at least 7 characters").isLength({
      min: 7,
    }),
  ],
  (req, res) => {
    // Finds the validation errors in this request and wraps them in an object with handy functions
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    // User creation if validations passes
    User.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
    })
      .then((user) => res.json(user))
      .catch((err) => {
        console.log(err);
        res.json({
          error: "Please enter a unique email for user",
          message: err.message,
        });
      });
  }
);

module.exports = router;

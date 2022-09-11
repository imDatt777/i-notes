const express = require("express");
const router = express.Router();
const { body, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
var jwt = require("jsonwebtoken");

// Importing Schema
const User = require("../models/User");

const JWT_SECRET_KEY = "ThisIsTheBiggestSecretEver";

// Create a User using POST '/api/auth/createUser'. No Login required
router.post(
  "/createUser",
  // validations
  [
    body("name", "Enter a valid user name").isLength({ min: 3 }),
    body("email", "Enter a valid user email").isEmail(),
    body("password", "Password must be at least 7 characters").isLength({
      min: 7,
    }),
  ],
  async (req, res) => {
    // If there are errors, return bad request with errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      // Logic to check if user with same email id already exists
      let user = await User.findOne({ email: req.body.email });
      if (user) {
        return res
          .status(400)
          .json({ error: "Sorry, a user with same email already exists" });
      }

      // Hash generated secure password
      const salt = await bcrypt.genSalt(10);
      const secPass = await bcrypt.hash(req.body.password, salt);

      // User creation if validations passes
      user = await User.create({
        name: req.body.name,
        email: req.body.email,
        password: secPass,
      });

      // Sending Authentication token
      const data = {
        user: {
          id: user.id,
        },
      };

      const authToken = jwt.sign(data, JWT_SECRET_KEY);
      res.json(authToken);
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Something went wrong!");
    }
  }
);

module.exports = router;

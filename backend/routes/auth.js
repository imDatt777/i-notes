const express = require("express");
const router = express.Router();
const { body, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// Importing middleware
const fetchUser = require("../middleware/fetchUser");

// Importing Schema
const User = require("../models/User");

const JWT_SECRET_KEY = "ThisIsTheBiggestSecretEver";

// *********************************************ROUTE-1*********************************************
// Create a User using POST '/api/auth/createUser'. No Login required
router.post(
  "/createuser",
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

// *********************************************ROUTE-2*********************************************
// Authenticate a User using POST '/api/auth/login'.
router.post(
  "/login",
  // validations
  [
    body("email", "Enter a valid user email").isEmail(),
    body("password", "Password cannot be blank").exists(),
  ],
  async (req, res) => {
    // If there are errors, return bad request with errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    // Destructuring email and password
    const { email, password } = req.body;

    try {
      // Find if a user with entered email exists
      const user = await User.findOne({ email });
      if (!user) {
        return res
          .status(400)
          .json({ error: "Please enter valid credentials !" });
      }

      // Check for correct password entered
      const passwordCompare = await bcrypt.compare(
        password,
        user.password
      ); /*retutns true or false after password comparison*/
      if (!passwordCompare) {
        return res
          .status(400)
          .json({ error: "Please enter valid credentials !" });
      }

      // If correct login is attempted with valid credentials
      const data = {
        user: {
          id: user.id,
        },
      };

      const authToken = jwt.sign(data, JWT_SECRET_KEY);
      res.json(authToken);
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Internal Server Error !");
    }
  }
);

// *********************************************ROUTE-3*********************************************
// Fetch logged in user details using POST '/api/auth/fetchuser'. Login required
router.post("/fetchuser", fetchUser, async (req, res) => {
  try {
    const userId = req.user.id;

    // To fetch details excluding password
    const user = User.findById(userId).select("-password");
    res.send(user);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Internal Server Error !");
  }
});

module.exports = router;

const express = require("express");
const router = express.Router();
const { body, validationResult } = require("express-validator");

// Importing middleware
const fetchUser = require("../middleware/fetchUser");

// Importing Schema
const Note = require("../models/Note");

// *********************************************ROUTE-1*********************************************
// Fetch all notes using GET '/api/notes/fetchallnotes'. Login required
router.get("/fetchallnotes", fetchUser, async (req, res) => {
  try {
    const notes = await Note.find({ user: req.user.id });
    res.json(notes);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Something went wrong!");
  }
});

module.exports = router;

// *********************************************ROUTE-2*********************************************
// Add a note using POST '/api/notes/addnote'. Login required
router.post(
  "/addnote",
  fetchUser,
  [
    body("title", "Title is mandatory").isLength({ min: 1 }),
    body("description", "Description is mandatory").isLength({ min: 1 }),
    body("tag", "Tag is mandatory").isLength({ min: 1 }),
  ],
  async (req, res) => {
    try {
      // If there are errors, return bad request with errors
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }

      //   Creating a new note
      const { title, description, tag } = req.body;
      const note = new Note({ title, description, tag, user: req.user.id });
      const savedNote = await note.save();
      res.json(savedNote);
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Something went wrong!");
    }
  }
);

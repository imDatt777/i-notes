const mongoose = require("mongoose");

const mongoURL = "mongodb://127.0.0.1:27017/i-notes";

const connectToMongo = () => {
  mongoose.connect(mongoURL, () => {
    console.log("Connected to MongoDB");
  });
};

module.exports = connectToMongo;

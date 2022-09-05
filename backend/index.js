const connectToMongo = require("./db");
const express = require("express");

connectToMongo();

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello Datt!");
});

app.listen(port, () => {
  console.log(`Spp listening at http://localhost:${port}`);
});

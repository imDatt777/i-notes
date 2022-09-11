const connectToMongo = require("./db");
const express = require("express");

connectToMongo();

const app = express();

// port 3000 for react app
const port = 5000;

// Middleware
app.use(express.json());

// Routes
app.use("/api/auth", require("./routes/auth"));
app.use("/api/notes", require("./routes/notes"));

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});

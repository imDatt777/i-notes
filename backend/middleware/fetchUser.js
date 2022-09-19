const jwt = require("jsonwebtoken");

const JWT_SECRET_KEY = "ThisIsTheBiggestSecretEver";

const fetchUser = (req, res, next) => {
  // Get user from the h=jwt token and add id to the req object
  const token = req.header("auth-token");
  if (!token) {
    res.status(401).send({ error: "Please authenticate using valid token" });
  }

  try {
    const data = jwt.verify(token, JWT_SECRET_KEY);
    req.user = data.user;
    next();
  } catch (err) {
    console.error(err.message);
    res.status(401).send({ error: "Please authenticate using valid token" });
  }
};

module.exports = fetchUser;

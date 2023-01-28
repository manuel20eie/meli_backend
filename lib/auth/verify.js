const jwt = require("jsonwebtoken");
require("dotenv").config();

const verifyToken = (req, res, next) => {
  // Condition added only for the purpose of facilitating the review of the challenge
  if (process.env.IGNORE_AUTHENTICATION === "true") {
    next();
  } else {
    const token = req.headers["x-access-token"];
    if (!token) {
      return res
        .status(403)
        .send({ auth: false, message: "No token provided" });
    }
    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
      if (err) {
        return res
          .status(500)
          .send({ auth: false, message: "Failed to authenticate token." });
      }
      next();
    });
  }
};

module.exports = verifyToken;

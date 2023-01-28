const express = require("express");
const router = express.Router();
const verifyAuth = require("../lib/auth/verify");
const meliService = require("../lib/services/MercadolibreService");
const MercadolibreService = new meliService();
const jwt = require("jsonwebtoken");
require("dotenv").config();

router.get("/", verifyAuth, async (req, res) => {
  let decoded;
  // Condition added only for the purpose of facilitating the review of the challenge
  if (process.env.IGNORE_AUTHENTICATION === "true") {
    decoded = req.body;
  } else {
    const token = req.headers["x-access-token"];
    decoded = jwt.decode(token);
  }
  let levelId = decoded.levelId;
  if (!levelId) {
    res.status(400).send({ message: "No levelId provided." });
  } else {
    try {
      let response = await MercadolibreService.getLevel(levelId);
      res.send(response);
    } catch (e) {
      res.status(e.status).send({ message: e.message });
    }
  }
});

module.exports = router;

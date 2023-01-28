const express = require("express");
const router = express.Router();
const verifyAuth = require("../lib/auth/verify");
const meliService = require("../lib/services/MercadolibreService");
const MercadolibreService = new meliService();
const jwt = require("jsonwebtoken");
require("dotenv").config();

router.get("/", verifyAuth, async (req, res) => {
  let decoded;
  if (process.env.IGNORE_AUTHENTICATION === "true") {
    decoded = req.body;
  } else {
    const token = req.headers["x-access-token"];
    decoded = jwt.decode(token);
  }
  let shipmentId = decoded.shipmentId;
  if (!shipmentId) {
    res.status(400).send({ message: "No shipmentId provided." });
  } else {
    try {
      let response = await MercadolibreService.getShipment(shipmentId);
      res.send(response);
    } catch (e) {
      res.status(e.status).send({ message: e.message });
    }
  }
});

module.exports = router;

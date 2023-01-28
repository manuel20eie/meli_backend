const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.status(200).send({ status: false, message: "Server Okay" });
});

router.post("/test", (req, res) => {
  res.send("SERVER ALIVE");
});

module.exports = router;

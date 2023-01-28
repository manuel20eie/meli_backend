const express = require("express");
const app = express();
const routes = require("./routes");
const server = require("http").Server(app);
require("dotenv").config();
const bodyParser = require("body-parser");

const port = process.env.PORT || 3500;

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

routes(app);
server.listen(port);

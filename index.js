const express = require("express");
const cors = require("cors");
const app = express();
const routes = require("./routes");
const server = require("http").Server(app);
require("dotenv").config();
const bodyParser = require("body-parser");

const port = process.env.PORT || 3500;
const corsOptions = {
  origin: "*",
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

routes(app);
server.listen(port);

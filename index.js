const express = require("express");
const app = express();
const routes = require("./routes");
const server = require("http").Server(app);
const port = process.env.PORT || 3500;

routes(app);
server.listen(port);

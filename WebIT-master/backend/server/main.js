/* Settings */
const PORT = 3000;

/* External Requirements */
const express = require("express");
const http = require("http");
const path = require("path");
const bodyParser = require("body-parser");

/* Modules */
const app = express();
const server = http.createServer(app);

/* Internal Requirements */
const db = require("./db/db")(app);

/* Default error handling. */
app.all('*', (req, res) => res.sendStatus(400));

/* Express Configurations */
app.use(express.static(__dirname + "/../app"));
//app.use(bodyParser.json());

/* Start Server */
server.listen(PORT);

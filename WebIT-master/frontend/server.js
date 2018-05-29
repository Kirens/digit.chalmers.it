/* Settings */
const PORT = 8080;
const express = require("express");
const http = require("http");
const app = express();
const path = require("path");
const server = http.createServer(app);

// SPA - Single Page Application
app.use('/', function(req, res) {
  res.sendFile(path.resolve(__dirname + "/app/index.html"));
});

/* Start Server */
server.listen(PORT);
console.log("WebIT Frontend server started on port " + PORT + "...");

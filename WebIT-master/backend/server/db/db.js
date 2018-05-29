/* Requirements */
const mongoose = require("mongoose");

module.exports = function(app) {
  return require("./routes.js")(app);
}

/* Modules */
const schema = mongoose.Schema;
const mongoDB = "mongodb://mongo:27017";
mongoose.connect(mongoDB);

mongoose.Promise = global.Promise;
const db = mongoose.connection;

db.on("error", function(error) {
  console.error.bind(console, "MongoDB connection error:");
});

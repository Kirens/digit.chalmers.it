module.exports = function res(app) {
  return require("./text/text_routes.js")(app);
}

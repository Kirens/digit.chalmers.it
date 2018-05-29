const path = require("path");

module.exports = {
  entry: './app/index.js',
  output: {
    path: path.resolve(__dirname, "app/build"),
    filename: "bundle.js",
    publicPath: "/app/build"
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  }
}

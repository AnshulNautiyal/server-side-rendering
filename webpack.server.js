const path = require("path");

module.exports = {
  target: "node",
  entry: "./src/server/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "server-build.js",
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        options: {
          presets: ["react"],
        },
      },
    ],
  },
};

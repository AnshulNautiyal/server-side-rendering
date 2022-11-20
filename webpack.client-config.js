const path = require("path");
const merge =  require("webpack-merge");
const webpackBase = require("./webpack.base.js");
const ClientWebpack = {
  entry: "./src/client/index.js",
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "bundle-client.js",
  },
};

module.exports = merge(webpackBase, ClientWebpack);

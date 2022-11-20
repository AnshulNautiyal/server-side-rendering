const path = require("path");
const merge = require("webpack-merge");
const webpackBase = require("./webpack.base.js");
const webpackNodeExternals = require("webpack-node-externals");

const webpackServer = {
  target: "node",
  entry: "./src/server/index.js",
  output: {
    path: path.resolve(__dirname, "dist"), // __dirname - current path , foldername - 'dist'
    filename: "bundle-server.js", // inside 'dist' folder, file name will be 'bundle.js'
  },
  externals: [webpackNodeExternals()],
};

module.exports = merge(webpackBase, webpackServer);

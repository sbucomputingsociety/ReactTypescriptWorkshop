var path = require('path');
const webpack = require("webpack");

var config = {
  entry: './src/index',
  output: {
    filename: "bundle.js",
    path: __dirname + "/build"
  },
  resolve: {
    // Add '.ts' and '.tsx' as resolvable extensions.
    extensions: [".ts", ".tsx", ".js", ".json"]
  },
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
};

module.exports = config;
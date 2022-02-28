const { appendFile } = require("fs");
const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
module.exports = {
  entry: "./src/App.js",
  output: {
    filename: "App.js",
    path: path.resolve(__dirname, "dist"),
  },
  mode: "none",
  module: {
    rules: [
      {
        test: /\.css/, // All css files
        use: [MiniCssExtractPlugin.loader, "css-loader"], // Webpack reads from right to left, "style-loader" - for bundling css with js
      },
      {
        test: /\.js$/, // All js files
        exclude: /node_modules/, // Except
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/env"],
            plugins: ["@babel/plugin-proposal-class-properties"], // can add as many plugins as needed for babel
          },
        },
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "App.css",
    }),
  ], //
};

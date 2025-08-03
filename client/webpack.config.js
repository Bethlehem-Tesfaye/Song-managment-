const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const Dotenv = require("dotenv-webpack");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: "./src/main.jsx",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    assetModuleFilename: "[name][ext]"
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/i,
        type: "asset/resource"
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html"
    }),
    new Dotenv({
      systemvars: true
    }),
    new CopyWebpackPlugin({
      patterns: [{ from: path.resolve(__dirname, "public/_redirects"), to: "" }]
    })
  ],
  devServer: {
    historyApiFallback: true
  }
};

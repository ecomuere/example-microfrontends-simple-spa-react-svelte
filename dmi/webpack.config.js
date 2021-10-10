const { join, resolve } = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: resolve(__dirname, "./src/index.js"),
  output: {
    filename: "bundle.js",
    // path: resolve(__dirname, "./public"),
  },
  module: {
    rules: [
      {
        test: /\.(js)$/,
        loader: "babel-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.mu$/,
        loader: "mustache-loader",
        // loader: 'mustache-loader?minify'
        // loader: 'mustache-loader?{ minify: { removeComments: false } }'
        // loader: 'mustache-loader?noShortcut'
      },
    ],
  },
  devServer: {
    // contentBase: "./public",
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: "jquery",
      JQuery: "jquery",
      Backbone: "backbone",
      _: "underscore",
    }),
    // new HtmlWebpackPlugin({ template: "src/index.html" }),
  ],
};

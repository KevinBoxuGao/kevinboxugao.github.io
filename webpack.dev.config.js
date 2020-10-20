const merge = require("webpack-merge");
const common = require("./webpack.common.config.js");
const ErrorOverlayPlugin = require("error-overlay-webpack-plugin");
const webpack = require("webpack");
var path = require("path");

module.exports = merge(common, {
  mode: "development",
  devtool: "cheap-module-source-map",
  module: {
    rules: [
      {
        test: /\.html$/,
        loader: "html-loader",
      },
    ],
  },
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    publicPath: "/",
    hot: true,
    historyApiFallback: true,
  },
  plugins: [new webpack.HotModuleReplacementPlugin(), new ErrorOverlayPlugin()],
});

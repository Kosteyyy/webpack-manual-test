const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const loader = require("sass-loader");

module.exports = {
  entry: { main: "./src/index.js", vendor: "./src/vendor.js" },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.html$/,
        use: ["html-loader"],
      },
      {
        test: /\.(svg|png|jpg|gif)$/,
        type: "asset/resource",
        generator: {
          filename: "imgs/[name].[hash].[ext]",
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/template.html",
    }),
  ],
};

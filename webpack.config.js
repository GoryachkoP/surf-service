const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin")

module.exports = {
  mode: "development",
  entry: {
    main: path.resolve(__dirname, "./src/index.js"),
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "./dist"),
    publicPath: "",
  },
  devServer: {
    contentBase: path.resolve(__dirname, "./dist"),
    // compress: true,
    open: true,
    port: 3000,
  },
  module: {
    rules: [
      {
        test: /\.(s[ac]|c)ss$/,
        use: [
          // Creates `style` nodes from JS strings
          MiniCssExtractPlugin.loader,
          // Translates CSS into CommonJS
          "css-loader",
          "postcss-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      // изображения
      {
        test: /\.(?:ico|gif|png|jpg|jpeg|svg)$/i,
        type: "asset/resource",
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "./src/template.html"),
      filename: "index.html",
    }),
    new CleanWebpackPlugin(),
    new CopyPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, "src/assets/images"),
          to: path.resolve(__dirname, "dist/images"),
        },
      ],
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css",
    }),
    new CssMinimizerPlugin()
  ],
};

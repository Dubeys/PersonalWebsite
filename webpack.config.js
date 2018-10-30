const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require('path');

module.exports = {

  entry: { main: './src/index.js' },

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js'
  },

  devtool: "source-map",

  module: {
    rules: [

      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },

      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader"
          }
        ]
      },

      {
        test: /\.scss$/,
        use: [
          // 'style-loader',
          MiniCssExtractPlugin.loader,
          'css-loader?sourceMap',
          'sass-loader?sourceMap',
        ]
      },

      {
        test: /\.(png|jpg|gif|svg)$/,
        use: [
          // 'url-loader?limit=10000',
          {
            loader: "file-loader",
            options: {
              name: '[name].[ext]?[hash:8]',
              outputPath: 'dist/',
              useRelativePath: true
            }
          }
        ]
      }

    ]
  },

  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: "./index.html"
    }),
    new MiniCssExtractPlugin({
      filename: "index.css"
    })
  ]
  
};
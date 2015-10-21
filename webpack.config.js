/* eslint-env node */
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './app',
  output: {
    path: './dist',
    filename: 'bundle.js'
  },
  plugins: [
    new HtmlWebpackPlugin({template: './app/index.html'})
  ],
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel' }
    ]
  }
};

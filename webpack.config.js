module.exports = {
  entry: './app',
  output: {
    path: './dist',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      { test: /\.js?$/, loader: 'babel' }
    ]
  }
};

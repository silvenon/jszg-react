module.exports = {
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
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

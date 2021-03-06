/*
    ./webpack.config.js
*/
const path = require('path');
module.exports = {
  entry: './index.js',
  output: {
    path: path.resolve('build'),
    filename: 'index_bundle.js'
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ }
    ]
  }
}

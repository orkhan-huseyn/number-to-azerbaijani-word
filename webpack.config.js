const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.min.js'
  },
  module: {
    rules: [{ test: /\.js/, use: 'babel-loader' }]
  },
  optimization: {
    minimizer: [new UglifyJsPlugin()]
  }
};

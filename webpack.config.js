const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    libraryTarget: 'umd'
  },
  devtool: 'source-map',
  module: {
    rules: [{ test: /\.js/, use: 'babel-loader' }]
  },
  optimization: {
    minimizer: [new UglifyJsPlugin()]
  }
};

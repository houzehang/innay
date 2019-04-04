const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackIncludeAssetsPlugin = require('html-webpack-include-assets-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin');
const dependencies = require('./package.json').dependencies;

module.exports = {
  externals: [...Object.keys(dependencies || {})],
  entry: './main.js',
  target: 'electron-main',
  mode: 'production',
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: './',
    filename: 'main.js',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            cacheDirectory: true
          }
        }
      }
    ]
  },
   /**
   * Determine the array of extensions that should be used to resolve modules.
   */
  resolve: {
    extensions: ['.js', '.jsx', '.json']
  },
  plugins: [
    new webpack.EnvironmentPlugin({
      NODE_ENV: 'production',
    })
  ],
};

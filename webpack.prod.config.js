const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackIncludeAssetsPlugin = require('html-webpack-include-assets-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  entry: {
    vendor: [ 'react', 'react-dom' ],
    app : './dev/scripts/app.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: './',
    filename: '[name].[hash].js',
  },
  module: {
    rules: [
      { test: /\.html$/i, loader: 'html-loader' },
      {
        test: /\.jsx?$/,
        exclude: /node_module/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['es2015', 'react', 'stage-2']
            },
          },
        ],
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: "css-loader"
        })
      },
      {
        test: /\.less$/i,
        use: ExtractTextPlugin.extract([ 'css-loader', 'less-loader' ])
      },
      {
        test: /\.(gif|png|jpe?g|svg|mp3)$/i,
        use: [ 'file-loader' ]
      }
    ],
  },
  resolve: {
    modules: ['node_modules', path.resolve(__dirname, 'dev')],
    extensions: ['.js', '.jsx', '.less', '.css'],
  },
  plugins: [
    new webpack.EnvironmentPlugin({
      NODE_ENV: 'production',
    }),
    new CleanWebpackPlugin(['dist'], {
      root: __dirname
    }),
    new ExtractTextPlugin("styles.css"),
    new CopyWebpackPlugin([
      { from: 'libs/*', to: '' }
    ]),
    new UglifyJSPlugin({
      sourceMap: true
    }),
    new HtmlWebpackPlugin({
      title: "沐文",
      template: path.resolve(__dirname, "dev", "index.html"),
      filename: "index.html"
    }),
    new HtmlWebpackIncludeAssetsPlugin({
      assets: [
        './libs/flexible.js',
        './libs/AgoraRTCSDK-2.2.0.js',
        './libs/AgoraSig-1.3.0.js',
        './libs/jquery-3.3.1.min.js'
      ],
      publicPath: false,
      append: false
    })
  ],
};

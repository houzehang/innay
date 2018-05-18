const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const HtmlWebpackIncludeAssetsPlugin = require('html-webpack-include-assets-plugin');
const HtmlWebpackHarddiskPlugin = require('html-webpack-harddisk-plugin');

module.exports = {
  entry: {
    app : './dev/scripts/app.js'
  },
  output: {
    path: path.resolve(__dirname, 'public'),
    publicPath: 'http://localhost:3030/',
    filename: '[name].js',
  },
  mode: "development",
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
          use: [{
              loader: "style-loader" // creates style nodes from JS strings
          }, {
              loader: "css-loader" // translates CSS into CommonJS
          }]
      },
      {
          test: /\.less$/,
          use: [{
              loader: "style-loader" // creates style nodes from JS strings
          }, {
              loader: "css-loader" // translates CSS into CommonJS
          }, {
              loader: "less-loader" // compiles Less to CSS
          }]
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
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      title: "大语文",
      template: path.resolve(__dirname, "dev", "index1.html"),
      filename: "index.html",
      alwaysWriteToDisk: true
    }),
    new HtmlWebpackIncludeAssetsPlugin({
      assets: [
        'http://localhost:3030/libs/flexible.js',
        'http://localhost:3030/libs/AgoraRTCSDK-2.2.0.js',
        'http://localhost:3030/libs/AgoraSig-1.3.0.js',
        'http://localhost:3030/libs/jquery-3.3.1.min.js',
        'http://localhost:3030/libs/jquery.tmpl.js'
      ],
      publicPath: false,
      append: false
    }),
    new HtmlWebpackHarddiskPlugin({
      outputPath: path.resolve(__dirname, 'dist')
    })
  ],
};

const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const HtmlWebpackIncludeAssetsPlugin = require('html-webpack-include-assets-plugin');
const HtmlWebpackHarddiskPlugin = require('html-webpack-harddisk-plugin');

module.exports = {
  devtool: 'cheap-source-map',
  entry: {
    app : './dev/scripts/app.js',
    version : './dev/scripts/version.js',
    classroom: './dev/scripts/classroom.js'
  },
  output: {
    path: path.resolve(__dirname, 'public'),
    publicPath: 'http://localhost:3030/',
    filename: '[name].js',
  },
  module: {
    rules: [
      { test: /\.html$/i, loader: 'html-loader' },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
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
      chunks: ["app"],
      title: "大语文",
      template: path.resolve(__dirname, "dev", "index.html"),
      filename: "index.html",
      alwaysWriteToDisk: true
    }),
    new HtmlWebpackIncludeAssetsPlugin({
      assets: [
        'http://localhost:3030/libs/flexible.js',
        'http://localhost:3030/libs/cocos2d-js-v1.1-min.js'
      ],
      publicPath: false,
      append: false,
      files: ['index.html']
    }),
    new HtmlWebpackPlugin({
      chunks: ["version"],
      template: path.resolve(__dirname, "dev", "version.html"),
      filename: "version.html",
      alwaysWriteToDisk: true
    }),
    new HtmlWebpackPlugin({
      chunks: ["classroom"],
      template: path.resolve(__dirname, "dev", "classroom.html"),
      filename: "classroom.html",
      alwaysWriteToDisk: true
    }),
    new HtmlWebpackIncludeAssetsPlugin({
      assets: [
        'http://localhost:3030/libs/flexible.js',
        'http://localhost:3030/libs/AgoraSDK/AgoraRTCSDK-2.5.1.js',
        'http://localhost:3030/libs/cocos2d-js-min.js',
        'http://localhost:3030/libs/classroom/src/settings.js',
        'http://localhost:3030/libs/classroom/main.js'
      ],
      publicPath: false,
      append: false,
      files: ['classroom.html']
    }),
    new HtmlWebpackHarddiskPlugin({
      outputPath: path.resolve(__dirname, 'dist')
    })
  ],
};

const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const HtmlWebpackIncludeAssetsPlugin = require('html-webpack-include-assets-plugin');
const HtmlWebpackHarddiskPlugin = require('html-webpack-harddisk-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
  entry: {
    app : './dev/scripts/app.js'
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
      template: path.resolve(__dirname, "dev", "index.html"),
      filename: "index.html",
      alwaysWriteToDisk: true
    }),
    new CopyWebpackPlugin([
      { from: 'dev/version.html', to: 'version.html', toType: "file" }
    ]),
    new HtmlWebpackIncludeAssetsPlugin({
      assets: [
        'http://localhost:3030/libs/flexible.js',
        'http://localhost:3030/libs/AgoraSDK/AgoraSdk.js',
        'http://localhost:3030/libs/AgoraSDK/AgoraSig-1.3.0.js',
        'http://localhost:3030/libs/AgoraSDK/AgoraRender.js',
        'http://localhost:3030/libs/AgoraSDK/webgl-utils.js',
        'http://localhost:3030/libs/jquery-3.3.1.min.js'
      ],
      publicPath: false,
      append: false
    }),
    new HtmlWebpackHarddiskPlugin({
      outputPath: path.resolve(__dirname, 'dist')
    })
  ],
};

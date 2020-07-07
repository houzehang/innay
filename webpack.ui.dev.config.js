const webpack = require('webpack');
const path = require('path');
const spawn = require('child_process').spawn
const HtmlWebpackPlugin = require('html-webpack-plugin')
const HtmlWebpackIncludeAssetsPlugin = require('html-webpack-include-assets-plugin');
const HtmlWebpackHarddiskPlugin = require('html-webpack-harddisk-plugin');
const dependencies = require('./package.json').dependencies;
require('./server')
module.exports = {
  devtool: 'inline-source-map',
  mode: 'development',
  target: 'electron-renderer',
  entry: {
    app : './dev/scripts/app.js'
  },
  output: {
    path: path.resolve(__dirname, 'public'),
    publicPath: 'http://localhost:5050/',
    filename: '[name].js',
    libraryTarget: 'commonjs2'
  },
  module: {
    rules: [
      { test: /\.html$/i, loader: 'html-loader' },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader'
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
      },
      {

        test: /\.(ttf|eot|woff|woff2|svg)$/,
        
        use: ["file-loader"] //1.把你的资源移动到输出目录2.返回最终引入资源的url
        
      }
    ],
  },
  resolve: {
    modules: ['node_modules', path.resolve(__dirname, 'dev')],
    extensions: ['.js', '.jsx', '.less', '.css'],
    alias: {
      'react-native$': 'react-native-web'
    }
  },
  plugins: [
    new webpack.EnvironmentPlugin({
      NODE_ENV: 'development'
    }),
    new HtmlWebpackPlugin({
      chunks: ["app"],
      template: path.resolve(__dirname, "dev", "index.html"),
      filename: "index.html",
      alwaysWriteToDisk: true
    }),
    new HtmlWebpackHarddiskPlugin({
      outputPath: path.resolve(__dirname, 'app')
    })
  ],
  node: {
    __dirname: false,
    __filename: false
  },
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    port: 5050,
    compress: true,
    noInfo: true,
    stats: 'errors-only',
    inline: true,
    lazy: false,
    hot: true,
    headers: { 'Access-Control-Allow-Origin': '*' },
    contentBase: path.join(__dirname, 'app'),
    watchOptions: {
      aggregateTimeout: 300,
      ignored: /node_modules/,
      poll: 100
    },
    historyApiFallback: {
      verbose: true,
      disableDotRule: false
    },
    before() {
      // console.log('Starting Main Process...');
      // spawn('npm', ['run', 'start'], {
      //   shell: true,
      //   env: process.env,
      //   stdio: 'inherit'
      // })
      //   .on('close', code => process.exit(code))
      //   .on('error', spawnError => console.error(spawnError));
    }
  }
};

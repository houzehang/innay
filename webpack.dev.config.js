const webpack = require('webpack');
const path = require('path');
const spawn = require('child_process').spawn
const HtmlWebpackPlugin = require('html-webpack-plugin')
const HtmlWebpackIncludeAssetsPlugin = require('html-webpack-include-assets-plugin');
const HtmlWebpackHarddiskPlugin = require('html-webpack-harddisk-plugin');
const dependencies = require('./package.json').dependencies;

module.exports = {
  externals: [...Object.keys(dependencies || {})],
  devtool: 'inline-source-map',
  mode: 'development',
  target: 'electron-renderer',
  entry: {
    renderer: './dev/scripts/renderer.js'
  },
  output: {
    path: path.resolve(__dirname, 'public'),
    publicPath: 'http://localhost:3030/',
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
      }
    ],
  },
  resolve: {
    modules: ['node_modules', path.resolve(__dirname, 'dev')],
    extensions: ['.js', '.jsx', '.less', '.css'],
  },
  plugins: [
    new webpack.EnvironmentPlugin({
      NODE_ENV: 'development'
    }),
    new HtmlWebpackPlugin({
      chunks: ["renderer"],
      template: path.resolve(__dirname, "dev", "renderer.html"),
      filename: "index.html",
      alwaysWriteToDisk: true
    }),
    new HtmlWebpackHarddiskPlugin({
      outputPath: path.resolve(__dirname, 'dist')
    })
  ],
  node: {
    __dirname: false,
    __filename: false
  },
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    port: 3030,
    compress: true,
    noInfo: true,
    stats: 'errors-only',
    inline: true,
    lazy: false,
    hot: true,
    headers: { 'Access-Control-Allow-Origin': '*' },
    contentBase: path.join(__dirname, 'dist'),
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

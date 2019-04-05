const webpack = require('webpack');
const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackIncludeAssetsPlugin = require('html-webpack-include-assets-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin');
const dependencies = require('./package.json').dependencies;
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  externals: [...Object.keys(dependencies || {})],
  target: 'electron-renderer',
  mode: 'production',
  entry: {
    app : path.join(__dirname,'dev/scripts/app.js'),
    version : path.join(__dirname,'dev/scripts/version.js')
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: './',
    filename: '[name].[hash].js',
    // https://github.com/webpack/webpack/issues/1114
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
            loader: 'babel-loader',
            options: {
              cacheDirectory: true
            }
          },
        ],
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader"
        ]
      },
      {
        test: /\.less$/i,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'less-loader'
        ]
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
  optimization: {
    minimizer: [
      new TerserPlugin({
        parallel: true,
        sourceMap: true,
        cache: true
      }),
      new OptimizeCSSAssetsPlugin({
        cssProcessorOptions: {
          map: {
            inline: false,
            annotation: true
          }
        }
      })
    ]
  },
  plugins: [
    new webpack.EnvironmentPlugin({
      NODE_ENV: 'production',
    }),
    // new webpack.NamedModulesPlugin(),
    new CleanWebpackPlugin(['dist'], {
      root: __dirname
    }),
    new MiniCssExtractPlugin({
      filename: "[name].[hash].css"
    }),
    new CopyWebpackPlugin([
      { from: 'libs/**/*', to: '' },
      { from: 'dev/version.html', to: 'version.html', toType: "file" }
    ]),
    new HtmlWebpackPlugin({
      chunks: ["app"],
      title: "明兮大语文",
      template: path.resolve(__dirname, "dev", "index.html"),
      filename: "index.html"
    }),
    new HtmlWebpackPlugin({
      chunks: ["version"],
      template: path.resolve(__dirname, "dev", "version.html"),
      filename: "version.html",
    }),
    new HtmlWebpackIncludeAssetsPlugin({
      assets: [ ],
      publicPath: false,
      append: false,
      files: ['index.html']
    }),
    new HtmlWebpackIncludeAssetsPlugin({
      assets: [
        './libs/flexible.js'
      ],
      publicPath: false,
      append: false,
      files: ['version.html']
    })
  ],
  node: {
    __dirname: false,
    __filename: false
  }
};

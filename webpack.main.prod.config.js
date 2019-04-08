const webpack = require('webpack');
const path = require('path');
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
    // https://github.com/webpack/webpack/issues/1114
    libraryTarget: 'commonjs2'
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
  /**
   * Disables webpack processing of __dirname and __filename.
   * If you run the bundle in node.js it falls back to these values of node.js.
   * https://github.com/webpack/webpack/issues/2010
   */
  node: {
    __dirname: false,
    __filename: false
  }
};

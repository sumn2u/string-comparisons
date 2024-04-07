const path = require('path');
const webpack = require('webpack');
const TerserPlugin = require('terser-webpack-plugin');


module.exports = {
  entry: './index.js',
  mode: 'production',
  output: {
    filename: '[name].min.js',
    path: path.resolve(__dirname, 'dist'),
    libraryTarget: 'umd',  // Generate UMD bundle
    globalObject: 'this', // This line ensures `this` is used as the global object
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
    ],
  },
  optimization: {
    minimizer: [new TerserPlugin()], // Add TerserPlugin for minification
  },
  plugins: [
    new webpack.DefinePlugin({
      // Define 'self' as 'global' for non-browser environments
      'self': 'global',
    }),
  ],
};

const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: './index.js',
  mode: 'production',
  output: {
    filename: '[name].js',
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
  plugins: [
    new webpack.DefinePlugin({
      // Define 'self' as 'global' for non-browser environments
      'self': 'global',
    }),
  ],
};

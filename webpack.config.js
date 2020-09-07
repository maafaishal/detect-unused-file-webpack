const webpack = require('webpack');
const path = require('path');

const { UnusedFilesWebpackPlugin } = require("unused-files-webpack-plugin");

const unusedFilesWebpackPluginOptions = {
  patterns: ["./src/**/*.js"],
  globOptions: {
    ignore: "node_modules/**/*"
  }
}

const config = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  plugins: [
    new UnusedFilesWebpackPlugin(unusedFilesWebpackPluginOptions),
  ],
};

module.exports = config;
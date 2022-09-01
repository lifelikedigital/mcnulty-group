const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const RemoveEmptyScriptsPlugin = require('webpack-remove-empty-scripts');

module.exports = {
  entry: {
    global: ['./src/global.js', '/src/global.css'],
    home: ['./src/home.js', './src/home.css'],
    cities: './src/cities.css',
    stores: './src/stores.css',
    'stores-info': './src/stores-info.js',
    support: ['./src/support.js', './src/support.css'],
    about: './src/about.css',
    blog: './src/blog.css',
    'blog-posts': ['./src/blog-posts.js', './src/blog-posts.css'],
    'blog-categories': './src/blog-categories.css',
    careers: './src/careers.css',
    'job-postings': './src/job-postings.css',
    'posts-listing': './src/posts-listing.css',
    legal: './src/legal.css',
  },
  output: {
    filename: '[name].js',
    // filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, './dist'),
  },
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.s?css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/env'],
            plugins: ['@babel/plugin-proposal-class-properties', 'lodash'],
          },
        },
      },
    ],
  },
  optimization: {
    minimizer: [new CssMinimizerPlugin()],
  },
  plugins: [
    new TerserPlugin({
      extractComments: false,
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css',
      // filename: '[name].[contenthash].css',
    }),
    // prettier-ignore
    new LodashModuleReplacementPlugin,
    new CleanWebpackPlugin(),
    new RemoveEmptyScriptsPlugin(),
  ],
  // devtool: 'cheap-module-eval-source-map', development
  // devtool: 'cheap-source-map', production
};

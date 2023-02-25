const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const GAME_NAME = path.basename(path.resolve());
const IS_DEV = process.env.NODE_ENV === 'development';
const PORT = 8080;

module.exports = {
  mode: IS_DEV ? 'development' : 'production',
  // entry: path.join(__dirname, 'index.js'),
  entry: {
    main: path.join(__dirname, 'src', 'index.js'),
  },
  output: {
    filename: '[name].js',
    path: IS_DEV
      ? path.resolve(__dirname, `./build`)
      : path.resolve(__dirname, `../builds/${GAME_NAME}`),
  },
  devServer: {
    allowedHosts: 'all',
    compress: true,
    port: PORT,
    hot: true,
    https: false,
  },

  devtool: 'source-map',

  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },

      { test: /\.(glsl|vs|fs|vert|frag)$/, loader: 'raw-loader' },
    ],
  },

  resolve: {
    modules: [path.resolve('./node_modules'), path.resolve('./src')],
    extensions: ['.json', '.js', '.jsx'],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'src', 'index.html'),
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: 'src/assets',
          to: 'assets',
          noErrorOnMissing: true,
        },
      ],
    }),
    new MiniCssExtractPlugin({
      filename: './index.css',
    }),
  ],
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
        },
      },
    },
    minimize: true,
  },
};

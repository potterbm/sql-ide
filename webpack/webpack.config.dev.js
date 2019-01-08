const webpack = require('webpack');
const path    = require('path');
// const CopyWebpackPlugin = require('copy-webpack-plugin');

const rootPath = path.resolve(__dirname, '../');

module.exports = {
  context: path.join(__dirname, '../app'),
  devtool: 'inline-source-map',
  mode: 'development',
  entry: {
    app: [
      'react-hot-loader/patch',
      'webpack-dev-server/client?http://localhost:9000',
      'webpack/hot/only-dev-server',
      './index.js',
    ],
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'bundle.js',
    publicPath: 'http://localhost:9000/',
  },
  devServer: {
    hot: true,
    publicPath: 'http://localhost:9000/',
    historyApiFallback: true,
    port: 9000,
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
      },
    },
    {
      test: /\.scss$/,
      use: [
        {
          loader: 'style-loader',
          options: {
            sourceMap: true,
          },
        },
        {
          loader: 'css-loader',
          options: {
            modules: true,
            localIdentName: '[path][name]__[local]--[hash:base64:5]',
            sourceMap: true,
          },
        },
        {
          loader: 'sass-loader',
        },
        {
          loader  : 'sass-resources-loader',
          options : {
            resources: path.resolve(rootPath, 'app/styles/index.scss'),
          },
        },
      ],
    },
    {
      test: /\.css$/,
      use: [
        { loader: 'style-loader' },
        { loader: 'css-loader' },
      ],
    },
    {
      test: /\.(png|jpg|gif)$/,
      use: [{
        loader: 'file-loader',
        options: {},
      }],
    },
    ],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    // new CopyWebpackPlugin([{
    //   from: './src//app.js',
    // },
    // {
    //   from: './src/main/index.html',
    // },
    // ]),
  ],
  resolve: {
    extensions: ['.js', '.scss'],
    modules: [
      path.resolve(rootPath, 'app'),
      'node_modules',
    ],
  },
};

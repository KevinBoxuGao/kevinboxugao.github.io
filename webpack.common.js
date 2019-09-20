const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: {
    main: './src/index.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        loader: "babel-loader",
        exclude: /(node_modules|bower_components)/,
        options: { presets: ["@babel/env"] }
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              // you can specify a publicPath here
              // by default it uses publicPath in webpackOptions.output
              publicPath: '../',
              hmr: process.env.NODE_ENV === 'development',
            },
          },
          'css-loader',
        ],
      },
      {
        test: /\.scss$/,
        use: [
          {loader: 'style-loader'},
          {loader: MiniCssExtractPlugin.loader},
          {loader: 'css-loader'},
          {
            loader: 'postcss-loader',
            options: {
              plugins: function () {
                return [
                  require('autoprefixer')
                ];
              }
            }
          },
          {loader: 'sass-loader'},
        ],
        
      },
      {
        test: /\.(png|jpe?g|gif|pdf|svg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]'
            },
          },
        ],
      },
    ]
  },
  resolve: { modules: ['node_modules', 'src'], extensions: ["*", ".js", ".jsx"] },
  plugins: [
    // new CleanWebpackPlugin(['dist/*']) for < v2 versions of CleanWebpackPlugin
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css',
    }),
    new HtmlWebpackPlugin({
      hash: true,
      template: './public/index.html',
      filename: 'index.html',
    }),
  ],
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].bundle.js',
  }
};
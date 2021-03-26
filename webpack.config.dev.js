'use strict'

  const webpack = require('webpack')
  const { VueLoaderPlugin } = require('vue-loader');
  const HtmlWebpackPlugin = require('html-webpack-plugin');


  module.exports = {
    mode: 'development',
    entry: [
      './src/app.js'
    ],
    module: {
      rules: [
        {
          test: /\.vue$/,
          use: 'vue-loader'
        },
        {
          test: /\.scss$/,
          use: [
            'vue-style-loader',
            'css-loader',
            'sass-loader'
          ]
        },
      ]
    },
    plugins: [
      new VueLoaderPlugin(),
      new HtmlWebpackPlugin({
        title: 'Template Application',
        filename: 'index.html',
        template: 'src/index.html',
        inject: true
      })
    ],
    devServer: {
    hot: true,
    liveReload: true,
    watchOptions: {
      poll: true
    }
  },
  }

'use strict'

  const webpack = require('webpack')
  const { VueLoaderPlugin } = require('vue-loader')
  const HtmlWebpackPlugin = require('html-webpack-plugin')

  const CopyWebpackPlugin = require('copy-webpack-plugin')
  const path = require('path');
  function resolve (dir) {
    return path.join(__dirname, '..', dir)
  }


  module.exports = {
    mode: 'development',
    entry: [
      './src/app.js'
    ],
    resolve: {
        alias: {
          '@': path.resolve(__dirname, 'src/'),
          'node': path.resolve(__dirname, 'node_modules'),
        },
      },
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
      }),
      new webpack.ProvidePlugin({
        process: 'process/browser',
      }),
      //This plugin is not copying the files at this stage. May not need to although.
      new CopyWebpackPlugin({
        patterns: [
          { from: "./src/assets/*", to: "./dist/img/" },
        ],
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

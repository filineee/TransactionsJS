/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

'user strict'

var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
require('es6-promise').polyfill();

module.exports = {
    context: __dirname + "/react_files",
    entry: "./index",
    output: {
        path: __dirname + "/public_html/",
        filename: "js/main.js",
        library: "UI"
    },
    watch: true,
    watchOptions: {
        aggregateTimeout: 100
    },
    
    devtool: "source-map",
    
    module: {
      loaders: [
        {
          loader: "babel-loader",
          exclude: /node_modules/,
          // Only run `.js` and `.jsx` files through Babel
          test: /\.jsx?$/,

          // Options to configure babel with
          query: {
            plugins: ['transform-runtime'],
            presets: ['es2015', 'stage-0', 'react'],
          }
        },
        {
            test: /\.scss$/,
            loader: ExtractTextPlugin.extract('css!sass'),
            exclude: /node_modules/
        }
      ]
    },
    plugins: [
        new ExtractTextPlugin('css/style.css', {
            allChunks: true
        })
    ]
    
}

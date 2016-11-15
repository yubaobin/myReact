var path = require('path');
var webpack = require('webpack'); 
var fs =require("fs");
var node_modules_dir = path.join(__dirname, 'node_modules');
var autoprefixer = require('autoprefixer');
var postcss      = require('postcss');
var precss =require("precss");
var ExtractTextPlugin = require("extract-text-webpack-plugin");

var config = { 
  entry:{
    app:["./app/App.js",'webpack-hot-middleware/client?reload=true'] 
  },
  resolve: {
    alias: {
      "fyBase":__dirname + "/app/base/",
      "fyBus":__dirname + "/app/business/"
    }
  },
  output: { 
    path: __dirname + '/dev/package',// 发布目录
    filename: '[name].js',//主入口文件 名称
    chunkFilename: '[id].chunk.js',//分片异步模块
    publicPath: '/package/'//分片模块异步加载时自动加上的路径
  },
  module: {
    noParse: [],
    loaders: [
        {test: /\.(jsx|js)$/,loader: 'babel',query: {presets: ['react', 'es2015']}},
        {test: /\.css$/, loader:ExtractTextPlugin.extract("style-loader","css-loader")},
        {test: /\.(png|jpg)$/, loader: "url?limit=8192" },
        {test: /\.json$/,loaders: [ 'json' ]},
        { test: /\.woff$/, loader: "url-loader?limit=10000&mimetype=application/font-woff" },
        { test: /\.ttf$/,  loader: "url-loader?limit=10000&mimetype=application/octet-stream" },
        { test: /\.eot$/,  loader: "file-loader" },
        { test: /\.svg$/,  loader: "file-loader?limit=10000&mimetype=application/octet-stream"},
        {test: /\.less$/,loader: "style!css?autoprefixer!postcss!less"}
    ]
  },
  postcss: [autoprefixer({browsers: ['iOS >= 8','Android >= 4.1']}),precss],
  plugins: [
    new webpack.HotModuleReplacementPlugin(), 
    new ExtractTextPlugin("[name].css")
  ]
}; 
var deps = [ 
  'react',
  'react-dom',
  'react-router',
]; 

deps.forEach(function (dep) {
  var depPath = path.resolve(node_modules_dir, dep);
  config.resolve.alias[dep.split(path.sep)[0]] = depPath;
  config.module.noParse.push(depPath);
}); 

module.exports = config;
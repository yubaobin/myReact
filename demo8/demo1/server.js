var path = require('path');
var webpack = require('webpack');
var express = require('express');
var webpackDevMiddleware = require('webpack-dev-middleware');
var webpackHotMiddleware = require('webpack-hot-middleware');
var config = require('./webpack.dev.config');

var app = express();
var compile = webpack(config);

var ip="0.0.0.0";
var port=8081;

app.use(webpackDevMiddleware(compile, {
    publicPath: config.output.publicPath,
    stats: {colors: true}
}));

app.get("/", function(req, res) {
  res.sendFile(__dirname + '/dev/index.html')
})


app.use(webpackHotMiddleware(compile, {
    log: console.log
})); 



app.listen(port, ip, function (err) {
    if (err) {
        console.log(err);
        return;
    }
    console.log('webpack服务器启动成功,请访问 http://localhost:'+port);
});
var koa = require('koa');
var router = require('koa-router');
var path = require('path');
var fs = require('fs');
var file = require('./file');
var parse = require('co-body');
var staticServer = require('koa-static');
var app = koa();

var appRouter = router();
var COMMENTS_FILE = path.join(__dirname,'comments.json');
app.use(staticServer(path.join(__dirname,'../public')));

appRouter.get('/',function *(next){
	this.redirect('/public/index.html');
}).get('/api/comments',function *(next){
	var data = yield file.readFile;
	this.body = JSON.parse(data);
}).post('/api/comments',function *(next){
	var post = yield parse(this.request);
	var comments = yield file.readFile;
	var oldComments = [];
	if(comments) comments = JSON.parse(comments);
	if(post) comments.push(post);
	yield file.writeFile(this,comments);
	this.body = comments;
})
app.use(appRouter.routes(),appRouter.allowedMethods());
app.listen(3000,function(req,res){
	console.log('listing port 3000 ...');
})


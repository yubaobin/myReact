var fs = require('fs');
var path = require('path');
var COMMENTS_FILE = path.join(__dirname,'comments.json');

function *readFile(){
	var data = fs.readFileSync(COMMENTS_FILE,'utf8');
	return data;
}

function *writeFile(ctx,data){
	fs.writeFileSync(COMMENTS_FILE,JSON.stringify(data, null, 4));
}

module.exports = {
	'readFile' : readFile,
	'writeFile' : writeFile
}
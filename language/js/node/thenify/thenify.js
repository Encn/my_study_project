//
var thenify = require('thenify');
var fs = require('fs');
var somethingAsync = thenify(
	function(cb) {
		setTimeout(cb, 500);
	});

var read = function(cb){
	fs.readFile("test.md",'utf8',function(err,data){
		if(!err){
			cb(null,data);
		}
	});
}

module.exports = function() {
	somethingAsync(function() {
		console.log(1);
	}).then(function() {
		console.log(2);
	})
	thenify(fs.readFile)("test.md",'utf8').then(function(data){
		console.log(data)
	})
	thenify(read)().then(function(data){
		console.log(3);
		console.log(data);
	})
}

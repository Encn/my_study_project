var app = require('../app/app.js')
var co = require('co');
var assert = require('assert');
describe('test delay',function(){
	it('should readFile from local file',function(done){
		co(function*(){
			yield app.first;
			yield app.second;
			var data = yield app.third;
			assert.equal(data,'hello!');
			done();
		});
	})
})
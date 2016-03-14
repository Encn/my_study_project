var koa = require('koa');

var app = koa();

app.use(function *(){
    this.body = 'hello world!';
});

app.listen(3000);


//
var http = require('http');

var req = http.request({
    hostname: '127.0.0.1',
    port: 3000,
    path: '/',
    method: 'GET'
}, function(res) {
    res.on('data', function(chunk) {
        console.log(chunk + '');
    })
});

req.end('');
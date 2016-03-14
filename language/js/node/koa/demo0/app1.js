var koa = require('koa');

var app = koa();

// x-response-time

app.use(function *(next) {
    var start = new Date;
    yield next;
    var ms = new Date - start;
    this.set('X-Response-Time', ms + 'ms');
});

// logger

app.use(function *(next){
    var start = new Date;
    yield next;
    var ms = new Date - start;
    console.log('%s %s - %s', this.method, this.url, ms);
});

// response

app.use(function *(){
    console.log(app.name, app.env, app.proxy, app.subdomainOffset);
    this.body = 'Hello world';
});

app.on('error', function(err, ctx){
  log.error('server error', err, ctx);
});

app.listen(3000);

//
var http = require('http');

var req = http.request({
    hostname: '127.0.0.1',
    port: 3000,
    path: '/resources',
    method: 'GET'
}, function(res) {
    console.log(res.headers);
    res.on('data', function(chunk) {
        console.log(chunk + '');
    })
});

req.end('');
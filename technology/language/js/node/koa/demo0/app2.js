import koa from 'koa';
var router = require('koa-router')();
let app = koa();

app.experimental = true;

// use async await
router.get('/meh',  async function (next) {
  this.body = 'MEH MEH MEH';
});

app.use(router.routes()).use(router.allowedMethods());
app.server = app.listen(3000);

//
var http = require('http');

var req = http.request({
    hostname: '127.0.0.1',
    port: 3000,
    path: '/meh',
    method: 'GET'
}, function(res) {
    console.log(res.headers);
    res.on('data', function(chunk) {
        console.log(chunk + '');
    })
});

req.end('');
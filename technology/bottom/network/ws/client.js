var WebSocket = require('ws');
var ws = new WebSocket('ws://127.0.0.1:8080');

ws.on('open', function open () {
    ws.send('123456');
});

ws.on('message', function (data) {
    console.log(data);
});

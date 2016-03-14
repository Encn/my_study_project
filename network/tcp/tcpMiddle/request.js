import http from 'http';

let req = http.request({
    host: '127.0.0.1',
    port: 7777,
    headers: {
        accept: "*/*"
    }
}, (res) => {
    console.log(res.headers);
    res.on('data', (chunk) => {
        console.log(chunk.toString());
    });
    res.on('end', (chunk) => {
        console.log('end of http requesting');
    });
});

req.end();
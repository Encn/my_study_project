import http from 'http';

http.request({
    hostname: '127.0.0.1',
    port: 7777
}, (res) => {
    console.log(res.headers);
    res.on('data', (chunk) => {
        console.log(chunk.toString());
    });
    res.on('end', () => {
        console.log('end of http requesting');
    });
});

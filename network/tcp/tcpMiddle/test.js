/**
 * tcp as middle proxy
 *
 * request -> tcp server -> actually server
 */

import net from 'net';
import http from 'http';

/////////////////////////////////////////////////

let tcpServer = net.createServer((socket) => {
    
});

tcpServer.listen(7777, () => {
    console.log('tcp server listen on 7777');
});

/////////////////////////////////////////////////////

let dataServer = http.createServer((req, res) => {
    res.end('hello world!');
});

dataServer.listen(6666, () => {
    console.log('data server listen on 6666');
});

/////////////////////////////////////////////////////

http.request({
    host: '127.0.0.1',
    port: 7777
}, (res) => {
    console.log(res.headers);
    res.on('data', (chunk) => {
        console.log(chunk.toString());
    });
    res.on('end', (chunk) => {
        console.log('end of http requesting');
    });
});
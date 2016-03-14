/**
 * tcp as middle proxy
 *
 * request -> tcp server -> actually server
 */

import http from 'http';

let dataServer = http.createServer((req, res) => {
    res.end('hello world!');
});

dataServer.listen(6666, () => {
    console.log('data server listen on 6666');
});
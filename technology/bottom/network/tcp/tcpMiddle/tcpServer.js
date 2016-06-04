/**
 * tcp as middle proxy
 *
 * request -> tcp server -> actually server
 */

import net from 'net';

/////////////////////////////////////////////////

let tcpServer = net.createServer((socket) => {
    console.log('request comming');

    let client = net.connect({
        host: '127.0.0.1',
        port: 6666
    }, () => {
        console.log('[tcp server]' + 'connect to data server 6666');
    });

    socket.pipe(client); // socket' data pipe to client
    client.pipe(socket); // client's data pipe to socket

    // socket.on('data', (chunk) => {
    //     console.log('[tcp server]' + chunk.toString());
    //     client.write(chunk);
    // });

    // socket.on('end', () => {
    //     console.log('[tcp server]' + 'client disconnect');
    // });

    // client.on('data', (chunk) => {
    //     console.log('[client]' + chunk.toString());
    //     socket.write(chunk);
    // });

    // client.on('end', () => {
    //     console.log('[client]' + 'client disconnect');
    // });
});

tcpServer.listen(7777, () => {
    console.log('tcp server listen on 7777');
});

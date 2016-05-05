import net from 'net';

let server = net.createServer((socket) => {
    socket.on('data', (chunk) => {
        console.log(chunk.toString());
    });
    socket.on('end', () => {
        console.log('client disconnect');
    });
    setTimeout(() => {
        socket.write('HTTP/1.1 200 OK\n');
        socket.write('Date: Thu, 20 May 2004 21:12:58 GMT\n');
        socket.write('Connection: keep-alive\n');
        socket.write('Transfer-Encoding: chunked\n\n');

        // transfer chunk data
        socket.write('5\r\n');
        socket.write('Hello\r\n');
        socket.write('0\r\n');
        socket.write('\r\n');// trailing CRLF
    }, 1000);
});

server.listen(7777, () => {
    console.log('tcp server listen on 7777');
});

// test
// use curl command
// for example: curl http://127.0.0.1:7777

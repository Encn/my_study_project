import net from 'net';

let server = net.createServer((socket) => {
    socket.on('end', () => {
        console.log('client disconnected');
    });
    socket.on('data', (chunk) => {
        console.log(chunk.toString());
        socket.write('i got it');
    });
});

server.listen(7777, () => {
    console.log('server bound 7777');
});
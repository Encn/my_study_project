import net from 'net';
import http from 'http';

let globalClient = null;

let tcpServer = net.createServer((socket) => {
    globalClient = socket;
    socket.on('data', (chunk) => {
        console.log('tcp server accept data from client: ' + chunk);
    })
});

tcpServer.listen(6666, () => {
    console.log('tcp server listen at 6666');
});

let httpServer = http.createServer((req, res) => {
    globalClient.write('ok!');
    globalClient.pipe(res);
    setTimeout(() => {
        res.end();
    }, 1000);
});

httpServer.listen(7777, () => {
    console.log('http server listen at 7777');
});

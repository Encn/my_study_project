import net from 'net';

let tcpClient = net.connect({
    port: 6666,
    host: '127.0.0.1'
}, () => {
    console.log('connect to sender server 127.0.0.1:6666');
});

tcpClient.on('data', (chunk) => {
    console.log('client accept: ' + chunk.toString());
    tcpClient.write('msg come from tcp client');
});

tcpClient.on('end', function() {
    console.log('disconnected from server');
});
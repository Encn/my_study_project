import net from 'net';

let client = net.connect({
    host: '127.0.0.1',
    port: 7777
}, () => {
    console.log('connect to server 7777');
});

client.on('data', (chunk) => {
    console.log(chunk.toString());
});

client.on('end', function() {
    console.log('disconnected from server');
});

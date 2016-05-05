import net from 'net';

let client = net.connect({
    port: 6666,
    host: '127.0.0.1'
},() => {
    console.log('tcp client connect to http server 6666');
    client.write('GET / HTTP/1.1\n');
    client.write('User-Agent: test/1.0\n');
    client.write('Host: localhost\n');
    client.write('Connection: close\n');
    client.write('Accept: */*\n');
    client.write('\r\n');
});

client.on('data', (chunk) => {
    console.log(chunk.toString());
});

client.on('end', () => {
    console.log('server close connection');
});

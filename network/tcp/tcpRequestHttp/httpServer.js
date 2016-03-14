import http from 'http';

let server = http.createServer((req, res) => {
    res.write('hello');
    res.end();
});

server.listen(6666, () => {
    console.log('http server listen on 6666');
});
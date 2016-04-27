var r = require('rethinkdb');

var connection = null;

let log = console.log; // eslint-disable-line

r.connect({
    host: 'localhost',
    port: 28015
}, function (err, conn) {
    if (err) throw err;
    connection = conn;

    r.db('test').tableCreate('authors').run(connection, function (err, result){
        if (err) throw err;
        log(JSON.stringify(result, null, 2));
    });
});

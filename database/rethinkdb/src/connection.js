var r = require('rethinkdb');

r.connect({
    host: 'localhost',
    port: 28015
}, function (err, conn) {
    if (err) throw err;
    console.log(conn); // eslint-disable-line
});

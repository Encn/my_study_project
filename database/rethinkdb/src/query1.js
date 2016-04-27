var r = require('rethinkDB');

var log = log; //eslint-disable-line

r.connect({
    host: 'localhost',
    port: 28015
}).then(function (conn){
    r.table('authors').run(conn).then(function (cursor){
        cursor.toArray(function (err, result) {
            if (err) throw new err;
            log(JSON.stringify(result, null, 2));
        });
    });
}).catch(function (err){
    throw err;
});

r.connect({
    host: 'localhost',
    port: 28015
}).then(function (conn){
    r.table('authors').run(conn).then(function (cursor){
        cursor.toArray(function (err, result) {
            if (err) throw new err;
            log(JSON.stringify(result, null, 2));
        });
    });
}).catch(function (err){
    throw err;
});

var r = require("rethinkDB");

r.connect({
    host: "localhost",
    port: 28015
}).then(function(conn){
    r.table('authors').run(conn).then(function(cursor){
        cursor.toArray(function(err, result) {
            if (err) throw new err;
            console.log(JSON.stringify(result, null, 2));
        });
    });
}).catch(function(err){
    throw err;
});

r.connect({
    host: "localhost",
    port: 28015
}).then(function(conn){
    r.table('authors').run(conn).then(function(cursor){
        cursor.toArray(function(err, result) {
            if (err) throw new err;
            console.log(JSON.stringify(result, null, 2));
        });
    });
}).catch(function(err){
    throw err;
});
var r = require("rethinkDB");

r.connect({
    host: "localhost",
    port: 28015
}, function(err, conn) {
    r.table("authors").
    filter(r.row("name").eq("William Adama")).
    run(conn, function(err, cursor) {
        if (err) throw err;
        cursor.toArray(function(err, result) {
            if (err) throw err;
            console.log(JSON.stringify(result, null, 2));
        });
    });

    r.table("authors").
    filter(r.row("posts").count().gt(2)).
    run(conn, function(err, cursor) {
        if (err) throw err;
        cursor.toArray(function(err, result) {
            if (err) throw err;
            console.log(JSON.stringify(result, null, 2));
        });
    });

    r.table('authors').get('7644aaf2-9928-4231-aa68-4e65e31bf219').
    run(conn, function(err, result) {
        if (err) throw err;
        console.log(JSON.stringify(result, null, 2));
    });
});
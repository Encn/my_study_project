/**
 * you can build real time app via rethinkdb
 *
 * by using changes interface on table, we can know the changes hanppend to a table
 */

import 'babel-polyfill';
import r from 'rethinkdb';

let log = console.log; // eslint-disable-line

let changes = async () => {
    let conn = await r.connect({host: '127.0.0.1', port: 28015});

    await r.tableCreate('changes').run(conn);

    // listen the table changes
    r.table('changes').changes().run(conn, (err, cursor) => {
        cursor && cursor.each((err, changedData) => {
            if(!err) {
                /**
                 * changedData contains two attrs: old_val and new_val
                 *
                 * when old_val is null, means inserted a record
                 *
                 * when new_val is null, means deleted a record
                 */
                log(changedData);
            }
        });
    });

    log('insert data to table changes------------------------------------');
    await r.table('changes').insert({name: 'ddchen', mood: 'good'}).run(conn);

    log('drop tabel-------------------------------------------------------');

    await r.tableDrop('changes').run(conn);

    await conn.close();
};

(async () => {
    await changes();
})();

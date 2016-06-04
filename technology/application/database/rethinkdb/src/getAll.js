import r from 'rethinkdb';

/**
 * Note that innerJoin is slower and much less efficient than using eqJoin or concatMap with getAll. You should avoid using innerJoin in commands when possible.
 */

const log = console.log; // eslint-disable-line

let idGen = () => {
    return parseInt(Math.random() * 1000) + '' + new Date().getTime();
};

let test = async () => {
    let conn = await r.connect({
        host: 'localhost',
        port: 28015
    });

    try {
        let table1 = idGen();
        log(table1);
        await r.tableCreate(table1).run(conn);

        // insert data
        await r.table(table1).insert([{
            id: 1,
            what: 2
        }, {
            id: 2,
            what: 3
        }, {
            id: 3,
            what: 2
        }]).run(conn);

        log('table1');
        let c1 = await r.table(table1).run(conn);
        log(await c1.toArray());

        log('getAll');
        let c2 = await r.table(table1).getAll(1).run(conn);
        log(await c2.toArray());

        log('getAll2');

        // build index
        await r.table(table1).indexCreate('what').run(conn);
        await r.table(table1).indexWait().run(conn);
        //
        let c3 = await r.table(table1).getAll(2, {
            index: 'what'
        }).run(conn);
        log(await c3.toArray());
        //
        await r.tableDrop(table1).run(conn);
    } catch (err) {
        log(err);
    }
    log('close');
    //
    await conn.close();
};

test();

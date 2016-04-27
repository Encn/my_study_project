import r from 'rethinkdb';

const log = console.log; // eslint-disable-line

/**
 * Note that innerJoin is slower and much less efficient than using eqJoin or concatMap with getAll. You should avoid using innerJoin in commands when possible.
 */

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

        let table2 = idGen();
        log(table2);
        await r.tableCreate(table2).run(conn);

        // insert data
        await r.table(table1).insert({
            a: 1,
            join: 10
        }).run(conn);

        await r.table(table1).insert({
            a: 2,
            join: 6
        }).run(conn);

        await r.table(table1).insert({
            a: 133,
            join: 100
        }).run(conn);

        await r.table(table2).insert({
            a: 1111,
            b: 2,
            join: 12
        }).run(conn);

        await r.table(table2).insert({
            b: 3,
            join: 11
        }).run(conn);

        await r.table(table2).insert({
            b: 5,
            join: 0
        }).run(conn);

        log('table1');
        let c1 = await r.table(table1).run(conn);
        log(await c1.toArray());

        log('table2');
        let c2 = await r.table(table2).run(conn);
        log(await c2.toArray());

        log('innerjoin');
        // inner join
        let cursor = await r.table(table1).innerJoin(
            r.table(table2), (t1Row, t2Row) => {
                return t1Row('join').lt(t2Row('join'));
            }
        ).zip().run(conn);

        let rets = await cursor.toArray();

        log(rets);
        await r.tableDrop(table1).run(conn);
        await r.tableDrop(table2).run(conn);
    } catch (err) {
        log(err);
    }
    //
    log('close');
    //
    await conn.close();
};

test();

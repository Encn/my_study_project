import r from 'rethinkdb';

/**
 * Note that outerJoin is slower and much less efficient than using concatMap with getAll. You should avoid using outerJoin in commands when possible.
 */

let idGen = () => {
    return parseInt(Math.random() * 1000) + '' + new Date().getTime();
}

let test = async () => {
    let conn = await r.connect({
        host: "localhost",
        port: 28015
    });

    try {
        let table1 = idGen();
        console.log(table1);
        await r.tableCreate(table1).run(conn);

        let table2 = idGen();
        console.log(table2);
        await r.tableCreate(table2).run(conn);

        // insert data
        await r.table(table1).insert({
            a: 1,
            join: 10,
        }).run(conn);

        await r.table(table1).insert({
            a: 133,
            join: 100,
        }).run(conn);

        await r.table(table1).insert({
            a: 2,
            join: 6,
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

        console.log('table1');
        let c1 = await r.table(table1).run(conn);
        console.log(await c1.toArray());

        console.log('table2');
        let c2 = await r.table(table2).run(conn);
        console.log(await c2.toArray());

        console.log('outterjoin');
        // inner join
        let cursor = await r.table(table1).outerJoin(
            r.table(table2), (t1Row, t2Row) => {
                return t1Row('join').lt(t2Row('join'));
            }
        ).zip().run(conn);

        let rets = await cursor.toArray();

        console.log(rets);
    } catch (err) {
        console.log(err);
    }
    //
    await r.tableDrop(table1).run(conn);
    await r.tableDrop(table2).run(conn);

    console.log('close');
    //
    await conn.close();
};

test();
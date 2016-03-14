import r from 'rethinkdb';

/**
 * Note that innerJoin is slower and much less efficient than using eqJoin or concatMap with getAll. You should avoid using innerJoin in commands when possible.
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

        console.log('table1');
        let c1 = await r.table(table1).run(conn);
        console.log(await c1.toArray());

        console.log('getAll');
        let c2 = await r.table(table1).getAll(1).run(conn);
        console.log(await c2.toArray());

        console.log('getAll2');

        // build index
        await r.table(table1).indexCreate('what').run(conn);
        await r.table(table1).indexWait().run(conn);
        // 
        let c3 = await r.table(table1).getAll(2, {
            index: 'what'
        }).run(conn);
        console.log(await c3.toArray());
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
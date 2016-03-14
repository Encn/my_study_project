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

        let table2 = idGen();
        console.log(table2);
        await r.tableCreate(table2).run(conn);

        // insert data
        await r.table(table1).insert([{
            id: 1,
            def: [1, 2, 3]
        }, {
            id: 2,
            def: [4, 5, 6]
        }, {
            id: 3,
            def: [7, 8, 9]
        }]).run(conn);

        await r.table(table2).insert([{
            tid: 2,
            data: 11
        }, {
            tid: 3,
            data: 22
        }, {
            tid: 4,
            data: 33
        }]).run(conn);

        console.log('table1');
        let c1 = await r.table(table1).run(conn);
        console.log(await c1.toArray());

        console.log('table2');
        let c2 = await r.table(table2).run(conn);
        console.log(await c2.toArray());

        console.log('concat table1 def');
        let c3 = await r.table(table1).concatMap((item) => item('def')).run(conn);
        console.log(await c3.toArray());

        console.log('concat map to eqJoin');
        await r.table(table2).indexCreate('tid').run(conn);
        await r.table(table2).indexWait().run(conn)
        let c4 = await r.table(table1).concatMap(
            (item) => r.table(table2).getAll(item('id'), {
                index: 'tid'
            }).map((t2) => {
                return {left: item, right: t2};
            })
        ).run(conn);
        console.log(await c4.toArray());
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
/**
 * This script introduce basic rethinkdb operations.
 *
 * The goal of study
 *
 * - know how to create connection to the database
 *
 * - know how to mulipulate the table, include creating and dropping table
 *
 * - know how to change data in table, include insert delete update and replace record
 *
 * - know how to query data from one table
 *
 * rethinkdb javascript api: https://www.rethinkdb.com/api/javascript/
 */

import 'babel-polyfill'; // we are gonna use asyn and await
import r from 'rethinkdb';

let log = console.log; // eslint-disable-line

let basicOperation = async () => {
    // create a connection
    log('-----------------create a db connection---------------------');
    let conn = await r.connect({host: 'localhost', port: 28015, db: 'test'});

    // create table
    log('---------------create table basicOperation------------------');
    await r.tableCreate('basicOperation').run(conn);

    // see our table list
    log('-----------------show our table list-------------------------');
    let tableList = await r.tableList().run(conn);
    log(tableList);

    // insert operation
    await insertOperation(conn);

    // query operation
    await queryOperation(conn);

    // update operation
    await updateOperation(conn);

    await replaceOperation(conn);

    // delete operation
    await deleteOperation(conn);

    // drop table
    log('---------------drop table basicOperation-------------------');
    await r.tableDrop('basicOperation').run(conn);

    // see our table list
    log('-----------------show our table list again-------------------------');
    tableList = await r.tableList().run(conn);
    log(tableList);

    // close connection
    log('----------------close db connection------------------------');
    await conn.close();
};

let updateOperation = async (conn) => {
    log('------------------update document-----------------------------');
    let updateRet = await r.table('basicOperation').get('manul').update({
        name: 'ddchen-new'
    }, {returnChanges: true}).run(conn);
    log(updateRet);
};

let insertOperation = async (conn) => {
    // inser data to out table
    log('-----------------insert data to table-----------------------');
    let instertRet = await r.table('basicOperation').insert({name: 'ddchen', talk: 'ok'}).run(conn);
    log(instertRet);

    // you can insert documents one time by pass array to insert function
    log('-----------------insert two more data to table-----------------------');
    instertRet = await r.table('basicOperation').insert([
        {name: 'new1', talk: 'no'},
        {id: 'manul', name: 'new2', talk: 'ok'}
    ], {returnChanges: true}).run(conn); // return results will have the changes
    log(instertRet);
};

let deleteOperation = async (conn) => {
    log('------------delete data------------------------------------');
    let deleteRet = await r.table('basicOperation').get('manul').delete().run(conn);
    log(deleteRet);
};

// query condition is json or ReQL expression
let queryOperation = async (conn) => {
    // show all data
    log('------------------show all documents in table----------------------');
    let allRets = await r.table('basicOperation').run(conn);
    allRets = await allRets.toArray();
    log(allRets);

    // get document by id
    log('-----------------get document by id--------------------------------');
    let getRet = await r.table('basicOperation').get('manul').run(conn);
    log(getRet);

    // filter documents
    log('----------------filter document------------------------------------');
    let filterRet = await r.table('basicOperation').filter({name: 'ddchen'}).run(conn);
    filterRet = await filterRet.toArray();
    log(filterRet);
};

// replace contains three situations
// 1. have primary key which does not exists in table. will perform as instert
// 2. replace original document with null, will perform as delete
// 3. otherwise, will perform like update
let replaceOperation = async (conn) => {
    log('---------------------------replace document: as insert-------------------------');
    let asInsertRet = await r.table('basicOperation').get('fake').replace({
        id: 'fake',
        name: 'fake-tmp',
        talk: 'no'
    }, {returnChanges: true}).run(conn);
    log(asInsertRet);

    log('---------------------------replace document: as update-------------------------');
    let asUpdate = await r.table('basicOperation').get('fake').replace({
        id: 'fake',
        name: 'fake-tmp',
        talk: 'ok'
    }).run(conn);
    log(asUpdate);

    log('---------------------------replace document: as delete-------------------------');
    let asDelete = await r.table('basicOperation').get('fake').replace(null).run(conn);
    log(asDelete);
};

(async () => {
    try {
        await basicOperation();
    } catch(err) {
        log('--------------------exception happen-----------------------');
        log(err);
    }
})();

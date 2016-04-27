import {
    MongoClient
}
from 'mongodb';

let log = console.log; // eslint-disable-line

const url = 'mongodb://localhost:27017/test';
(async() => {
    let db = await MongoClient.connect(url);
    let col = db.collection('simplr_query_find');
    await col.insertMany([{
        a: 1
    }, {
        a: 2
    }, {
        a: 3
    }]);
    let items = await col.find().toArray();
    log(items);
    await col.drop();
    await db.close();
})();

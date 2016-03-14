import {
    MongoClient
}
from 'mongodb';
const url = 'mongodb://localhost:27017/test';

const log = console.log; // eslint-disable-line

(async() => {
    let db = await MongoClient.connect(url);
    let col = await db.collection('test_insert');
    await col.insertOne({
        name: 'test'
    });
    await col.insertMany([{
        name: 'test2'
    }, {
        name: 'test3'
    }]);

    let items = await col.find().toArray();
    log(items);

    await col.drop();
    await db.close();
})();

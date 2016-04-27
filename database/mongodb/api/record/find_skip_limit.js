import {
    MongoClient
}
from 'mongodb';
const url = 'mongodb://localhost:27017/test';
const log = console.log; // eslint-disable-line

(async() => {
    let db = await MongoClient.connect(url);
    let col = db.collection('simple_limit_skip');
    await col.insertMany([{
        a: 1,
        b: 1,
        c: 1,
        d: 10
    }, {
        a: 2,
        b: 2,
        c: 2,
        d: 10
    }, {
        a: 3,
        b: 3,
        c: 3
    }]);

    let items = await col.find({
        d: 10
    }).skip(1).limit(2).project({
        b: true,
        c: true
    }).toArray();
    log(items);

    await col.drop();
    await db.close();
})();

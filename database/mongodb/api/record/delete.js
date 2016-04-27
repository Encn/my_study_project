import {
    MongoClient
}
from 'mongodb';

let log = console.log; // eslint-disable-line

var url = 'mongodb://localhost:27017/test';

(async () => {
    let db = await MongoClient.connect(url);
    let col = db.collection('test_delete');
    await col.insertMany([{
        name: 1
    }, {
        name: 2
    }]);
    await col.removeMany();
    let items = await col.find().toArray();
    log(items);
    await db.close();
})();

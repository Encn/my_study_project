import {
    MongoClient
}
from 'mongodb';

const log = console.log; // eslint-disable-line
const url = 'mongodb://localhost:27017/test';

(async () => {
    let db = await MongoClient.connect(url);

    let collection = db.collection('test_drop');

    let insertResult = await collection.insertOne({
        name: 'ddchen'
    });
    log(insertResult);

    let dropReply = await collection.drop();
    log(dropReply);

    let replies = await db.listCollections().toArray();
    log(replies);
    await db.close();
})();

import {
    MongoClient
}
from 'mongodb';

const url = 'mongodb://localhost:27017/test';
const log =console.log; // eslint-disable-line

(async() => {
    let db = await MongoClient.connect(url);
    let col = db.collection('simple_explain_query');
    await col.insertMany([{
        a: 1
    }, {
        a: 2
    }, {
        a: 3
    }]);

    let exp = await col.find({
        a: 1
    }).explain();
    log(exp);
    await col.drop();
    await db.close();
})();

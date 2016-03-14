import {
    MongoClient
}
from 'mongodb';

const url = 'mongodb://localhost:27017/test';

(async () => {
    let db = await MongoClient.connect(url);
    console.log('connect correctly to server.'); // eslint-disable-line
    await db.close();
})();

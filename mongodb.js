const { MongoClient } = require('mongodb');
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);
const database = "backend";

async function dbconnect() {
    let response = await client.connect();
    let db = response.db(database);
    return db.collection('user');
}

module.exports = dbconnect;
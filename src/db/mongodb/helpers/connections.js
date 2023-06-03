import mongodb from 'mongodb';

const url = 'mongodb://localhost:27017';
const dbName = 'demo';

const dbConfig = {
  url,
  dbName,
};

const makeIdFromString = (id) => {
  return new mongodb.ObjectId(id);
};

//

export const connection = async (url, { dbName } = dbConfig) => {
  const { MongoClient } = mongodb;

  const client = new MongoClient(url, { userNewParser: true });
  await client.connect();
  const db = await client.db(dbName);
  db.makeId = makeIdFromString;

  return db;
};

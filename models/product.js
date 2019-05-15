const ObjectId = require('mongodb').ObjectId;
const { dbs } = require('../dbs');

const detail = async (id) => {
  const results = await dbs.production.collection('products').find({_id: ObjectId(id)})
    .toArray();
  return results[0];
};

module.exports.list = async () => {
  return await dbs.production.collection('products').find({})
    .toArray();
};

module.exports.add = async (product) => {
  return await dbs.production.collection('products').insertOne(product);
};


exports.detail = detail;
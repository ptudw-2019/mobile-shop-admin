require('dotenv').config();
const {initdb} = require('../dbs');
const product = require('./product');

describe('Product model', () => {
  before(async () => {
    await initdb();
  });
  it('#list', async () => {
    const products = await product.list();
    console.log(products);
  });

  it('#add', async () => {
    await product.add({name:'Test', price: 18000001});
  });
});


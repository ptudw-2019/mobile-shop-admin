const product = require('../models/product');

function formatPrice(price) {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

exports.index = async (req, res, next) => {
    // const price = [20990000, 28600000, 12990000, 4990000];
    // const data = [{
    //     name: 'Samsung Galaxy S10',
    //     brand: 'Samsung',
    //     count: 100,
    //     price: formatPrice(price[0]),
    // }, {
    //     name: 'iPhone XS Max 64 GB',
    //     brand: 'Apple',
    //     count: 542,
    //     price: formatPrice(price[1]),
    // }, {
    //     name: 'Samsung Galaxy M20',
    //     brand: 'Samsung',
    //     count: 70,
    //     price: formatPrice(price[3]),
    // }, {
    //     name: 'Xiaomi Mi Mix 3',
    //     brand: 'Xiaomi',
    //     count: 0,
    //     price: formatPrice(price[2]),
    // }];
    // data.forEach((element, index) => {
    //     element.id = (index + 1).toString();
    // });
    const data = await product.list();
    res.render('products/index', { category: 'Sản phẩm', categoryLink: '/product', title: 'Danh sách sản phẩm', data })
};

exports.add = (req, res, next) => {
    res.render('products/add', { category: 'Sản phẩm', categoryLink: '/product', title: 'Thêm sản phẩm' });
};

exports.addPost = async (req, res, next) => {
    await product.add(req.body);
    res.redirect('./');
};

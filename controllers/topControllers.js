exports.products = (req, res, next) => {
    const data = [{
        name: 'Samsung Galaxy S8',
        brand: 'Samsung',
        count: 1847,
    }, {
        name: 'iPhone X 64 GB',
        brand: 'Apple',
        count: 1690,
    }, {
        name: 'iPhone 8 64 GB',
        brand: 'Apple',
        count: 1688,
    }, {
        name: 'Xiaomi Mi Mix 3',
        brand: 'Xiaomi',
        count: 1594,
    }, {
        name: 'Samsung Galaxy S8+',
        brand: 'Samsung',
        count: 1594,
    }, {
        name: 'Samsung Galaxy Note 8',
        brand: 'Samsung',
        count: 1506,
    }, {
        name: 'iPhone X 128 GB',
        brand: 'Apple',
        count: 1477,
    }, {
        name: 'iPhone X 256 GB',
        brand: 'Apple',
        count: 902,
    }, {
        name: 'Oppo F11 Pro',
        brand: 'Oppo',
        count: 453,
    }, {
        name: 'Xiaomi Mi 9',
        brand: 'Xiaomi',
        count: 69,
    },];
    data.forEach((element, index) => {
        element.id = (index + 1).toString();
    });
    res.render('top/product', { category: 'Top 10', categoryLink: '/', title: 'Sản phẩm', data });
};

exports.brands = (req, res, next) => {
    const data = [
        {
            brand: 'Samsung',
            count: 15933,
            revenue: '4,410,099,000'
        }, {
            brand: 'Apple',
            count: 14447,
            revenue: '7,822,552,000'
        },
        {
            brand: 'Oppo',
            count: 10392,
            revenue: '2,168,338,000'
        }, {
            brand: 'Xiaomi',
            count: 6587,
            revenue: '869,191,000'
        },
        {
            brand: 'Huawei',
            count: 2413,
            revenue: '651,699,000'
        }, {
            brand: 'ASUS',
            count: 1678,
            revenue: '479,921,000'
        },
    ];
    data.forEach((element, index) => {
        element.id = (index + 1).toString();
    });
    res.render('top/brand', { category: 'Top 10', categoryLink: '/', title: 'Thương hiệu', data });
};
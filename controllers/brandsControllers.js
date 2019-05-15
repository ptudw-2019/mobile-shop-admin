exports.index = (req, res, next) => {
    const data = [{
        name: 'Samsung',
    }, {
        name: 'Apple',
    }, {
        name: 'Xiaomi',
    }];
    data.forEach((element, index) => {
        element.id = (index + 1).toString();
    });
    res.render('brands/index', { category: 'Thương hiệu', categoryLink: '/brands', title: 'Danh sách thương hiệu', data })
};

exports.add = (req, res, next) => {
    res.render('brands/add', { category: 'Thương hiệu', categoryLink: '/brands', title: 'Tạo thương hiệu' });
};

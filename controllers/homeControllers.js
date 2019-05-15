exports.home = (req, res, next) => {
    const data = {
        revenue: '1,062,231,000',
        users: 1717,
        products: 765,
        orders: 4166,
    };
    res.render('home/index', { title: 'Trang chủ', data });
};
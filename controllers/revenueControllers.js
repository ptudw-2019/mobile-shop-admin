function formatPrice(price) {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

const price = [6910000, 13940000, 31059000, 1099000, 9401000];
const data = [
    {
        name: 'Samsung Galaxy A7',
        price: formatPrice(price[0]),
        count: 18,
    },
    {
        name: 'Xiaomi Mi Pro',
        price: formatPrice(price[1]),
        count: 9,
    },
    {
        name: 'iPhone XS Max 256 GB',
        price: formatPrice(price[2]),
        count: 22,
    },
    {
        name: 'Oppo Find X',
        price: formatPrice(price[3]),
        count: 10,
    },
    {
        name: 'Samsung Galaxy A9',
        price: formatPrice(price[4]),
        count: 6,
    },
];
let sum = 0;
data.forEach((element, index) => {
    element.id = (index + 1).toString();
    element.total = formatPrice(price[index] * element.count);
    sum += (price[index] * element.count);
});
const totalSum = formatPrice(sum);
const years = [2016, 2017, 2018];

exports.date = (req, res, next) => {
    res.render('revenue/date', { category: 'Doanh thu', categoryLink: '/', title: 'Doanh thu trong ngày', data, totalSum });
};

exports.week = (req, res, next) => {
    res.render('revenue/week', { category: 'Doanh thu', categoryLink: '/', title: 'Doanh thu trong tuần', data, totalSum });
};

exports.month = (req, res, next) => {
    res.render('revenue/month', { category: 'Doanh thu', categoryLink: '/', title: 'Doanh thu trong tháng', data, totalSum, years});
};

exports.quarter = (req, res, next) => {
    res.render('revenue/quarter', { category: 'Doanh thu', categoryLink: '/', title: 'Doanh thu trong quý', data, totalSum, years });
};

exports.year = (req, res, next) => {
    res.render('revenue/year', { category: 'Doanh thu', categoryLink: '/', title: 'Doanh thu trong năm', data, totalSum, years});
};
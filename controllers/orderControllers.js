exports.done = (req, res, next) => {
    const data = [{
        price: '17,990,000',
        create: '04/04/2019',
        done: '16/04/2019',
        address: '227 Nguyễn Văn Cừ, Phường 4, Quận 5, TPHCM'
    }, {
        price: '3,990,000',
        create: '10/04/2019',
        done: '11/04/2019',
        address: '340 Quang Trung, Phường 10, Quận Gò Vấp, TPHCM'
    }, {
        price: '4,590,000',
        create: '14/03/2019',
        done: '06/04/2019',
        address: '108 Trần Hưng Đạo, Quận Hoàn Kiếm, Hà Nội'
    }, {
        price: '8,090,000',
        create: '26/03/2019',
        done: '27/04/2019',
        address: '182 Lê Đại Hành, Phường 15, Quận 11'
    }];
    data.forEach((element, index) => {
        element.id = (index + 1).toString();
    });
    res.render('order/done', { category: 'Đơn hàng', categoryLink: '/order/done', title: 'Đơn hàng đã giao', data })
};

exports.delivering = (req, res, next) => {
    const data = [{
        price: '2,240,000',
        create: '18/04/2019',
        address: '260 Dương Thị Mười, Phường Tân Thới Hiệp, Quận 12, TPHCM',
        phone: '0976713746',
    }, {
        price: '360,000',
        create: '10/04/2019',
        address: '57 Bà Triệu, Thị trấn Hóc Môn, Huyện Hóc Môn, TPHCM',
        phone: '0903770119',
    }, {
        price: '1,051,000',
        create: '18/04/2019',
        address: '108 Trần Hưng Đạo, Quận Hoàn Kiếm, Hà Nội',
        phone: '0898865315',
    }, {
        price: '105,920,000',
        create: '20/04/2019',
        address: '182 Lê Đại Hành, Phường 15, Quận 11, TPHCM',
        phone: '0269193363',
    }];
    data.forEach((element, index) => {
        element.id = (index + 1).toString();
    });
    res.render('order/delivering', { category: 'Đơn hàng', categoryLink: '/order/delivering', title: 'Đơn hàng đang giao', data })
};

exports.receive = (req, res, next) => {
    const data = [{
        price: '26,240,000',
        create: '18/04/2019',
        address: '260 Dương Thị Mười, Phường Tân Thới Hiệp, Quận 12',
        phone: '0976713746',
    }, {
        price: '3,360,000',
        create: '10/04/2019',
        address: '57 Bà Triệu, Thị trấn Hóc Môn, Huyện Hóc Môn',
        phone: '0903770119',
    }, {
        price: '9,175,000',
        create: '12/04/2019',
        address: '108 Trần Hưng Đạo, Quận Hoàn Kiếm, Hà Nội',
        phone: '0898865315',
    }, {
        price: '14,290,000',
        create: '20/04/2019',
        address: '182 Lê Đại Hành, Phường 15, Quận 11',
        phone: '0269619333',
    }];
    data.forEach((element, index) => {
        element.id = (index + 1).toString();
    });
    res.render('order/receive', { category: 'Đơn hàng', categoryLink: '/order/receive', title: 'Đơn hàng chưa giao', data })
};
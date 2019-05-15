const express = require('express');
const router = express.Router();
const revenueControllers = require('../controllers/revenueControllers');

router.get('/date', revenueControllers.date);

router.get('/week', revenueControllers.week);

router.get('/month', revenueControllers.month);

router.get('/quarter', revenueControllers.quarter);

router.get('/year', revenueControllers.year);


module.exports = router;
const express = require('express');
const router = express.Router();
const brandsController = require('../controllers/brandsControllers');

router.get('/', brandsController.index);

router.get('/add', brandsController.add);

module.exports = router;
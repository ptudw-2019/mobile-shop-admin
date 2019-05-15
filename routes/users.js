const express = require('express');
const router = express.Router();
const userControllers = require('../controllers/userControllers');

/* GET users listing. */
router.get('/', userControllers.list);

router.get('/add', userControllers.add);

router.get('/edit/:id', userControllers.edit);

module.exports = router;

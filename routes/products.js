const express = require('express');
const router = express.Router();
const productsControllers = require('../controllers/productsControllers');

router.get('/', productsControllers.index);

router.get('/add', productsControllers.add);
router.post('/add', productsControllers.addPost);

module.exports = router;
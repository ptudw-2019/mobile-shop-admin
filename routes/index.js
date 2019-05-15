const homeControllers = require('../controllers/homeControllers');
const express = require('express');
const router = express.Router();


/* GET home page. */
router.get('/', homeControllers.home);

module.exports = router;

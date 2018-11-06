var express = require('express');
var router = express.Router();
var test = require('../controllers/testsController');

router.get('/', test.showTest);

module.exports = router;
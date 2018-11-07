var express = require('express');
var router = express.Router();
var test = require('../controllers/testsController');
var isLoggedIn = require('../middleware/logged_in_validator');

router.get('/', isLoggedIn, test.showTest);

module.exports = router;
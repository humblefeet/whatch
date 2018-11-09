var express = require('express');
var router = express.Router();
var discover = require('../controllers/discoveryController');
var isLoggedIn = require('../middleware/logged_in_validator');

router.get('/', isLoggedIn, discover.showIndex);

module.exports = router;
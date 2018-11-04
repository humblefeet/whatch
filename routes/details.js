var express = require('express');
var router = express.Router();
var details = require('../controllers/detailsController');


router.get = ('/', details.showDetail);

module.exports = router;
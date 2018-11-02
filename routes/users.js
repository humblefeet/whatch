var express = require('express');
var router = express.Router();
var users = require('../controllers/usersController');

router.get('/:id', users.profile);

module.exports = router;
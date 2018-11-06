var express = require('express');
var router = express.Router();
var users = require('../controllers/usersController');
var isLoggedIn = require('../middleware/logged_in_validator');

router.get('/:id', isLoggedIn, users.profile);
router.post('/:id/histories', isLoggedIn, users.newHistory);

module.exports = router;
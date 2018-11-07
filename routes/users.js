var express = require('express');
var router = express.Router();
var users = require('../controllers/usersController');
var isLoggedIn = require('../middleware/logged_in_validator');

router.get('/:id', isLoggedIn, users.profile);
router.post('/:id/histories', isLoggedIn, users.newHistory);
router.get('/:id/histories/:hid/delete', isLoggedIn, users.removeHistory);
router.get('/:id/histories/:hid/movies', isLoggedIn, users.getMovies);
router.get('/:id/histories/:hid/movies/:mid', isLoggedIn, users.getOneMovie);

module.exports = router;
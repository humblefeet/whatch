var express = require('express');
var router = express.Router();
var movies = require('../controllers/moviesController');
var isLoggedIn = require('../middleware/logged_in_validator');

router.get('/', isLoggedIn, movies.getAllMovies);
router.get('/:id', isLoggedIn, movies.getOneMovie);

module.exports = router;
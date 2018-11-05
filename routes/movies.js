var express = require('express');
var router = express.Router();
var movies = require('../controllers/moviesController');


router.get('/', movies.getAllMovies);
router.get('/:id', movies.getOneMovie);

module.exports = router;
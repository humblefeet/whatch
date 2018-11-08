var express = require('express');
var router = express.Router();
var passport = require('passport');
var index = require('../controllers/indexController');
require('dotenv').config()
const axios = require('axios');
const base_url = 'https://api.themoviedb.org/3/'
const api_key = `?api_key=${process.env.TMDB_API_KEY}`

router.get('/', index.showIndex);

router.get('/auth/google', passport.authenticate(
	'google',
	{ scope: ['profile', 'email'] }
));

router.get('/oauth2callback', passport.authenticate(
	'google',
	{
		successRedirect : '/discover',
		failureRedirect : '/'
	}
));

router.get('/logout', function(req, res){
	req.logout();
	res.redirect('/');
});

module.exports = router;
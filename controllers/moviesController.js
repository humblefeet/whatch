require('dotenv').config()
const axios = require('axios');
const base_url = 'https://api.themoviedb.org/3/'
const api_key = `?api_key=${process.env.TMDB_API_KEY}`

// get by genres
module.exports = {
	getAllMovies: function(req, res) {
		var genres = '18,27,80';
		axios.get(`${base_url}discover/movie${api_key}&with_genres=${genres}`)
			.then(function(response) {
				var movies = response.data.results;
				res.render('movies/index', {user: req.userModel, movies});
			})
	},
	getOneMovie: function(req, res) {
		var movie = '18';
		axios.get(`${base_url}movie/${movie}${api_key}`)
			.then(function(response) {
				var movie = response.data;
				res.render('movies/show', {user: req.userModel, movie});
			})
	}
}




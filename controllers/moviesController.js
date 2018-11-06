require('dotenv').config()
const axios = require('axios');
const base_url = 'https://api.themoviedb.org/3/'
const api_key = `?api_key=${process.env.TMDB_API_KEY}`

module.exports = {
	getAllMovies: function(req, res) {
		var user = req.userModel;
		var genres = user.histories[user.histories.length-1].genres;
		axios.get(`${base_url}discover/movie${api_key}&with_genres=${genres}`)
			.then(function(response) {
				var movies = response.data.results;
				console.log(movies);
				res.render('movies/index', {user, movies});
			})
	},
	getOneMovie: function(req, res) {
		var movie = req.params.id;
		axios.get(`${base_url}movie/${movie}${api_key}`)
			.then(function(response) {
				var movie = response.data;
				res.render('movies/show', {user: req.userModel, movie});
			})
	}
}




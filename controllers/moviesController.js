require('dotenv').config()
const JustWatch = require('justwatch-api');
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
				res.render('movies/index', {user, movies});
			})
	},
	getOneMovie: function(req, res) {
		var movie = req.params.id;
		axios.get(`${base_url}movie/${movie}${api_key}`)
			.then(function(response) {
				var movie = response.data;
				var jw = new JustWatch();
				jw.search({query: movie.title})
					.then(function(results) {
						var result = results.items[0];
						var offers = result.offers;
						console.log(offers);
						var providers = [];
						offers.forEach(function(provider) {
							// if provider_id == 
								// 8 - netflix
								// 9 - amazon
								// 10 - amazon-instant-video
								// 15 - hulu
								// 119 - amazon-prime-video
							// same provider name to providers array and return result to res.render
						})
					})
					
				res.render('movies/show', {user: req.userModel, movie});
			})
	}
}




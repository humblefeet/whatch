require('dotenv').config()
const axios = require('axios');
const base_url = 'https://api.themoviedb.org/3/'
const api_key = `?api_key=${process.env.TMDB_API_KEY}`

module.exports = {
	showIndex: function(req, res, next) {
		axios.get(`${base_url}movie/popular${api_key}&language=en-US&page=1`)
		.then(function(response) {
			var movies = response.data.results;
			res.render('index', { user: req.user, movies });
		})
	}
}
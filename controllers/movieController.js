require('dotenv').config()
const axios = require('axios');
const tmdb_api_key = process.env.TMDB_API_KEY
const base_url = `https://api.themoviedb.org/3/discover/movie?api_key=${tmdb_api_key}`

axios.get(`${base_url}&with_genres=18,27,80`)
	.then(function(response) {
		var results = response.data.results;
		results.forEach(result => {
			console.log(result.title);
		})
	})
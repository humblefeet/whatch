const Image = require('../models/Image');
require('dotenv').config()
const JustWatch = require('justwatch-api');
const axios = require('axios');
const base_url = 'https://api.themoviedb.org/3/'
const api_key = `?api_key=${process.env.TMDB_API_KEY}`

module.exports = {
	profile: function(req, res, next) {
		res.render('users/profile', {user: req.userModel})
	},
	newHistory: function(req, res, next) {
		var user = req.userModel;
		var newHistory = {
			genres: req.body.genres
		}
		user.histories.push(newHistory);
		user.save(function(err) {
			if (err) return next(err);
		})
		var history = user.histories[user.histories.length-1];
		res.redirect('/users/' + user._id + '/histories/' + history._id + '/movies');
	},
	removeHistory: function(req, res, next) {
		var user = req.userModel;
		var userHistories = user.histories;
		var historyToRemove = userHistories.id(req.params.hid);
		userHistories.splice(historyToRemove, 1);
		user.save(function(err) {
			res.redirect('/users/' + user._id);
		})
	},
	getMovies: function(req, res) {
		var user = req.userModel;
		var newHistory = "";
		user.histories.forEach(function(history) {
			if (history._id == req.params.hid) {
				newHistory = history;
			}
		})
		var genres = newHistory.genres;
		axios.get(`${base_url}discover/movie${api_key}&with_genres=${genres}`)
			.then(function(response) {
				var movies = response.data.results;
				res.render('users/movies/index', {user, movies, newHistory});
			})
	},
	getOneMovie: function(req, res) {
		var movie = req.params.mid;
		axios.get(`${base_url}movie/${movie}${api_key}`)
			.then(function(response) {
				var movie = response.data;
				var jw = new JustWatch();
				jw.search({query: movie.title})
					.then(function(results) {
						var result = results.items[0];
						var offers = result.offers;
						var providers = {};
						offers.forEach(function(provider) {
							provider = provider.provider_id.toString();
							console.log(provider);
							if (!providers.hasOwnProperty(provider)) {
								if (provider == "8") {
									providers[provider] = "Netflix";
								} else if (provider == "15") {
									providers[provider] = "Hulu";
								} else if (provider == "119") {
									providers[provider] = "Amazon Prime Video";
								}	
							}
						})
						providers = Object.values(providers);
						res.render('users/movies/show', {user: req.userModel, movie, providers});
					})
			})
	}
}
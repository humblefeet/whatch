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
		res.redirect('/users/' + user._id + '/histories/' + history._id + '/movies/1');
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
		var page = req.params.page;
		var newHistory = "";
		user.histories.forEach(function(history) {
			if (history._id == req.params.hid) {
				newHistory = history;
			}
		})
		var genres = newHistory.genres;
		axios.get(`${base_url}discover/movie${api_key}&with_genres=${genres}&page=${page}`)
			.then(function(response) {
				var movies = response.data.results;
				var pages = [];
				var i = 1;
				while (i <= 10) {
					pages.push(i);
					i++;
				}
				console.log(pages);
				res.render('users/movies/index', {user, movies, pages, newHistory});
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
						var offers = new Set(result.offers.map( o => o.provider_id));
						var providers = [];
						offers.forEach(function(provider) {
							switch(provider){
								case 8:
									providers.push('netflix');
									break;
								case 15:
									providers.push('hulu');
									break;
								case 119:
									providers.push('amazon');
									break;
								default:
									console.log("this isn't working");
							}
						})
						res.render('users/movies/show', {user: req.userModel, movie, providers});
					})
			})
	}
}
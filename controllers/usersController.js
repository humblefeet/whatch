const Image = require('../models/Image');

module.exports = {
	profile: function(req, res, next) {
		res.render('users/profile', {user: req.userModel})
	},
	newHistory: function(req, res, next) {
		var user = req.userModel;
		var newHistory = {
			// images: "test"
			// update this with the correct data from the front
		}
		user.histories.push(newHistory);
		user.save(function(err) {
			if (err) return next(err);
			res.redirect('/users/' + user._id);
		})
	}
}
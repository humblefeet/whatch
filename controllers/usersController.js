const Image = require('../models/Image');

module.exports = {
	profile: function(req, res, next) {
		res.render('users/profile', {user: req.userModel})
	}
}
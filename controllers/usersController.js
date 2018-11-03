const User = require('../models/User');

module.exports = {
	profile: function(req, res, next) {
		User.findById(req.params.id, function(err, user) {
			if (err) return next(err);
			res.render('users/profile', {user});
		})
	}
}
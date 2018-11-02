const User = require('../models/User');

module.exports = {
	profile: function(req, res, next) {
		User.findById(req.params.id).populate('histories').exec(function(err, user) {
			if (err) return next(err);
			History.find({}, function(err, histories) {
				res.render('users/profile', {histories, student});
			})
		})
	}
}
const User = require('../models/User');
const Image = require('../models/Image');

module.exports = {
	profile: function(req, res, next) {
		User.findById(req.params.id, function(err, user) {
			if (err) return next(err);
			Image.find({}, function(err, image) {
				user.histories.push({
					images: [image]
				})
			})
			user.save();
			res.render('users/profile', {user})
		})
	}
}
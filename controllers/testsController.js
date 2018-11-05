var Image = require('../models/Image');
var Genre = require('../models/Genre');

module.exports = {
    showTest: function(req,res,next){
		Image.find({}).populate('genres').exec()
			.then(function(images) {
				images.forEach(function(image) {
					image.genreIds = "";
					image.genres.forEach(function(genre) {
						image.genreIds += genre.genreId + ",";
					})
					image.genreIds = image.genreIds.substring(0, image.genreIds.length - 1);
				})
				res.render('recTests/test1', {user: req.userModel, images});
			})
    }	
}

// use getAttribute on td element to get the genre IDs for that element
// do .split(',') and save to get array separated genres
// pass the genres back to the controller to do API call
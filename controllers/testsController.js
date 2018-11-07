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
                shuffleArray(images);
				res.render('recTests/test1', {user: req.userModel, images});
			})
    }
}

function shuffleArray(images){
    let list = images.length;
    let index;
    let element;
    while(list>0){
        index = Math.floor(Math.random() * list);
        list--;
        element = images[list];
        images[list] = images[index];
        images[index] = element;
    }
    return images;
}

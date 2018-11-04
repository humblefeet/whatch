require('./database');
var Image = require('../models/Image');
var Genre = require('../models/Genre');

Promise.all([Image.deleteMany({}), Genre.deleteMany({})])

.then(function() {
	return Genre.create([
		{ name: 'Action', genreId: 28 },
		{ name: 'Adventure', genreId: 12 },
		{ name: 'Animation', genreId: 16 },
		{ name: 'Comedy', genreId: 35 },
		{ name: 'Crime', genreId: 80 },
		{ name: 'Documentary', genreId: 99 },
		{ name: 'Drama', genreId: 18 },
		{ name: 'Family', genreId: 10751 },
		{ name: 'Fantasy', genreId: 14 },
		{ name: 'History', genreId: 36 },
		{ name: 'Horror', genreId: 27 },
		{ name: 'Music', genreId: 10402 },
		{ name: 'Mystery', genreId: 9648 },
		{ name: 'Romance', genreId: 10749 },
		{ name: 'Science Fiction', genreId: 878 },
		{ name: 'Thriller', genreId: 53 },
		{ name: 'War', genreId: 10752 },
		{ name: 'Western', genreId: 37 }
    ])
})

.then(function(genres) {
	return Image.create([
		{genres: [genres[7]._id, genres[0]._id], url: 'https://i.imgur.com/JWLfBRn.jpg'},
		{genres: [genres[0]._id, genres[11]._id], url: 'https://i.imgur.com/JWLfBRn.jpg'},
		{genres: [genres[5]._id, genres[7]._id], url: 'https://i.imgur.com/JWLfBRn.jpg'},
		{genres: [genres[11]._id, genres[8]._id, genres[0]._id], url: 'https://i.imgur.com/JWLfBRn.jpg'}
    ])
})

.then(function() {
	require('mongoose').connection.close();
	process.exit();
});
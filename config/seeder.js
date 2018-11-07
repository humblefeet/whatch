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
		{genres: [genres[4]._id, genres[12]._id], url:'https://imgur.com/94VU72I.jpg'},
		{genres: [genres[11]._id, genres[8]._id, genres[0]._id], url: 'https://i.imgur.com/JWLfBRn.jpg'},
		{genres: [genres[16]._id, genres[2]._id], url: 'https://imgur.com/jeC17yw.jpg'},
		{genres: [genres[12]._id, genres[9]._id], url:'https://imgur.com/4t8ftjP.jpg'},
		{genres: [genres[6]._id, genres[5]._id], url:'https://imgur.com/Jo036UR.jpg'},
		{genres: [genres[3]._id, genres[4]._id], url:'https://i.imgur.com/r8yesVi.jpg'},
		{genres: [genres[11]._id, genres[7]._id], url:'https://i.imgur.com/gOgueqR.jpg'},
		{genres: [genres[15]._id, genres[0]._id], url:'https://i.imgur.com/xXpRO8M.jpg'},
		{genres: [genres[1]._id, genres[8]._id], url:'https://i.imgur.com/6C7rswj.jpg'},
		{genres: [genres[7]._id, genres[3]._id], url:'https://i.imgur.com/PDEWvSd.jpg'},
		{genres: [genres[13]._id, genres[8]._id], url:'https://i.imgur.com/xXpRO8M.jpg'},
		{genres: [genres[12]._id, genres[8]._id], url:'https://i.imgur.com/gbp2oqx.jpg'},
		{genres: [genres[10]._id, genres[15]._id], url:'https://i.imgur.com/CfgC2PH.jpg'},
		{genres: [genres[6]._id, genres[8]._id], url:'https://i.imgur.com/xXpRO8M.jpg'},
		{genres: [genres[8]._id, genres[2]._id], url:'https://imgur.com/ALpAA31.jpg'},
		{genres: [genres[7]._id, genres[6]._id], url:'https://imgur.com/Ba5QywC.jpg'}
	])
})

.then(function() {
	require('mongoose').connection.close();
	process.exit();
});
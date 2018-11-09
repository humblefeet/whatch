require('dotenv').config();
require('./database');
var Image = require('../models/Image');
var Genre = require('../models/Genre');

Promise.all([Image.deleteMany({}), Genre.deleteMany({})])

.then(function() {
	return Genre.create([
		{ name: 'Action', genreId: 28 },//0
		{ name: 'Adventure', genreId: 12 },//1
		{ name: 'Animation', genreId: 16 },//2
		{ name: 'Comedy', genreId: 35 },//3
		{ name: 'Crime', genreId: 80 },//4
		{ name: 'Documentary', genreId: 99 },//5
		{ name: 'Drama', genreId: 18 },//6
		{ name: 'Family', genreId: 10751 },//7
		{ name: 'Fantasy', genreId: 14 },//8
		{ name: 'History', genreId: 36 },//9
		{ name: 'Horror', genreId: 27 },//10
		{ name: 'Music', genreId: 10402 },//11
		{ name: 'Mystery', genreId: 9648 },//12
		{ name: 'Romance', genreId: 10749 },//13
		{ name: 'Science Fiction', genreId: 878 },//14
		{ name: 'Thriller', genreId: 53 },//15
		{ name: 'War', genreId: 10752 },//16
		{ name: 'Western', genreId: 37 }//17
    ])
})

.then(function(genres) {
	return Image.create([
		{genres: [genres[4]._id, genres[12]._id, genres[7]._id], url:'https://imgur.com/94VU72I.jpg'},
		{genres: [genres[11]._id, genres[8]._id, genres[0]._id], url: 'https://i.imgur.com/JWLfBRn.jpg'},
		{genres: [genres[16]._id, genres[2]._id], url: 'https://imgur.com/jeC17yw.jpg'},
		{genres: [genres[12]._id, genres[9]._id], url:'https://imgur.com/4t8ftjP.jpg'},
		{genres: [genres[6]._id, genres[5]._id], url:'https://imgur.com/Jo036UR.jpg'},
		{genres: [genres[3]._id, genres[4]._id], url:'https://i.imgur.com/r8yesVi.jpg'},
		{genres: [genres[11]._id, genres[7]._id], url:'https://i.imgur.com/gOgueqR.jpg'},
		{genres: [genres[15]._id, genres[0]._id], url:'https://i.imgur.com/xXpRO8M.jpg'},
		{genres: [genres[1]._id, genres[8]._id], url:'https://i.imgur.com/6C7rswj.jpg'},
		{genres: [genres[7]._id, genres[3]._id], url:'https://i.imgur.com/PDEWvSd.jpg'},
		{genres: [genres[14]._id, genres[8]._id], url:'https://i.imgur.com/qeRhrN3.jpg'},
		{genres: [genres[12]._id, genres[8]._id], url:'https://i.imgur.com/gbp2oqx.jpg'},
		{genres: [genres[10]._id, genres[15]._id], url:'https://i.imgur.com/CfgC2PH.jpg'},
		{genres: [genres[8]._id, genres[2]._id], url:'https://imgur.com/ALpAA31.jpg'},
		{genres: [genres[7]._id, genres[6]._id], url:'https://imgur.com/Ba5QywC.jpg'},
		{genres: [genres[15]._id, genres[6]._id], url:'https://i.imgur.com/SHFMbTJ.jpg'}
	])
})

.then(function() {
	require('mongoose').connection.close();
	process.exit();
});
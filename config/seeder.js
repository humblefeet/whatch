require('dotenv').config()
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
		{genres: [genres[4]._id, genres[5]._id, genres[7]._id], url:'https://imgur.com/94VU72I.jpg'},
		{genres: [genres[15]._id, genres[12]._id], url: 'https://imgur.com/jeC17yw.jpg'},
		{genres: [genres[16]._id, genres[5]._id], url:'https://imgur.com/4t8ftjP.jpg'},
		{genres: [genres[7]._id, genres[1]._id], url:'https://imgur.com/Jo036UR.jpg'},
		{genres: [genres[3]._id, genres[4]._id], url:'https://i.imgur.com/r8yesVi.jpg'},
		{genres: [genres[11]._id, genres[5]._id], url:'https://i.imgur.com/gOgueqR.jpg'},
		{genres: [genres[1]._id, genres[6]._id], url:'https://i.imgur.com/xXpRO8M.jpg'},
		{genres: [genres[1]._id, genres[8]._id], url:'https://i.imgur.com/6C7rswj.jpg'},
		{genres: [genres[7]._id, genres[3]._id], url:'https://i.imgur.com/PDEWvSd.jpg'},
		{genres: [genres[14]._id, genres[8]._id], url:'https://i.imgur.com/qeRhrN3.jpg'},
<<<<<<< HEAD
		{genres: [genres[12]._id, genres[8]._id], url:'https://i.imgur.com/gbp2oqx.jpg'},
		{genres: [genres[10]._id, genres[15]._id], url:'https://i.imgur.com/CfgC2PH.jpg'},
		{genres: [genres[8]._id, genres[2]._id], url:'https://imgur.com/ALpAA31.jpg'},
		{genres: [genres[7]._id, genres[6]._id], url:'https://imgur.com/Ba5QywC.jpg'},
		{genres: [genres[15]._id, genres[6]._id], url:'https://i.imgur.com/SHFMbTJ.jpg'}
=======
		{genres: [genres[12]._id, genres[5]._id], url:'https://i.imgur.com/gbp2oqx.jpg'},
		{genres: [genres[6]._id, genres[15]._id], url:'https://i.imgur.com/CfgC2PH.jpg'},
		{genres: [genres[14]._id, genres[0]._id], url:'https:/imgur.com/ALpAA31.jpg'},
		{genres: [genres[7]._id, genres[11]._id], url:'https://imgur.com/Ba5QywC.jpg'}, 
		{genres: [genres[5]._id, genres[10]._id], url:'https://imgur.com/WKBP5Pz.jpg'}, //new added by matt
		{genres: [genres[10]._id, genres[15]._id, genres[5]._id], url:'https://imgur.com/4Fk3IBK.jpg'},
		{genres: [genres[6]._id, genres[14]._id], url:'https://imgur.com/NObUX6v.jpg'},
		{genres: [genres[14]._id, genres[1]._id], url:'https://imgur.com/ZFAM90i.jpg'},
		{genres: [genres[15]._id, genres[0]._id], url:'https://imgur.com/qzFvRLS.jpg'},
		{genres: [genres[4]._id, genres[6]._id], url:'https://imgur.com/URgNeox.jpg'},
		{genres: [genres[17]._id, genres[9]._id], url:'https://imgur.com/YZFb6SG.jpg'},
		{genres: [genres[13]._id, genres[5]._id, genres[14]._id], url:'https://imgur.com/S3MMJf3.jpg'},
		{genres: [genres[5]._id, genres[7]._id], url:'https://imgur.com/15qY667.jpg'},
		{genres: [genres[6]._id, genres[7]._id], url:'https://imgur.com/GR64Cqy.jpg'},
		{genres: [genres[6]._id, genres[16]._id], url:'https://imgur.com/zccZfE3.jpg'},
		{genres: [genres[11]._id, genres[5]._id], url:'https://imgur.com/Qh12WMZ.jpg'},
		{genres: [genres[17]._id, genres[9]._id], url:'https://imgur.com/xAwHuZu.jpg'},
		{genres: [genres[9]._id, genres[13]._id], url:'https://imgur.com/MQmZfTo.jpg'},
		{genres: [genres[13]._id, genres[9]._id], url:'https://imgur.com/V89niIS.jpg'},
		{genres: [genres[3]._id, genres[7]._id], url:'https://imgur.com/Vj9s3wG.jpg'},
		{genres: [genres[1]._id, genres[7]._id], url:'https://imgur.com/akbYAMP.jpg'},
		{genres: [genres[0]._id, genres[3]._id], url:'https://imgur.com/FUIGTCB.jpg'}

>>>>>>> 4328b44db5a867dbccfa7416fcef2db02695e6a9
	])
})

.then(function() {
	require('mongoose').connection.close();
	process.exit();
});
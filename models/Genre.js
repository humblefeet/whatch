var mongoose = require('mongoose');

var genreSchema = new mongoose.Schema({
    name: String,
    genreId: Number 
    
});

module.exports = mongoose.model('Genre', genreSchema);
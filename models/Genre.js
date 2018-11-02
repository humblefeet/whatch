var mongoose = require('mongoose');

var genreSchema = new mongoose.Schema({
    name: String,
    tmdbId: Number 
    
});

module.exports = mongoose.model('Genre', genreSchema);
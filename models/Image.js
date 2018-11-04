var mongoose = require('mongoose');

var imageSchema = new mongoose.Schema({
    genres: [{ type: mongoose.Schema.Types.ObjectId, ref:'Genre'}],
    url:  String
});

module.exports = mongoose.model('Image', imageSchema);
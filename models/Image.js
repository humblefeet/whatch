var mongoose = require('mongoose');
require('mongoose-type-url');

var imageSchema = new mongoose.Schema({
    genres:[{ type: mongoose.Schema.Types.ObjectId, ref:'Genre'}],
    url: {type: mongoose.SchemaTypes.Url, required: true}
});

module.exports = mongoose.model('Image', imageSchema);
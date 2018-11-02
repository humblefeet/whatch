var mongoose = require('mongoose');



var historySchema = new mongoose.Schema({
    imageId: [{type: mongoose.Schema.Types.ObjectId, ref: 'Image'}]
},{
    timestamp: true
});

module.exports = mongoose.model('History', historySchema);
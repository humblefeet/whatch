var mongoose = require('mongoose');



var historySchema = new mongoose.Schema({
    images: [{type: mongoose.Schema.Types.ObjectId, ref: 'Image'}]
},{
    timestamp: true
});

module.exports = mongoose.model('History', historySchema);
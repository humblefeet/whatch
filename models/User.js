const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const historySchema = new Schema({
    images: [{type: mongoose.Schema.Types.ObjectId, ref: 'Image'}]
},{
    timestamp: true
});

const userSchema = new Schema({
	name: String,
	email: String,
	googleId: String,
	avatar: String,
	histories: [historySchema]
})

module.exports = mongoose.model('User', userSchema);
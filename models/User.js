const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
	name: String,
	email: String,
	googleId: String,
	avatar: String,
	histories: [{type: mongoose.Schema.Types.ObjectId, ref: 'History'}]
})

module.exports = mongoose.model('User', userSchema);
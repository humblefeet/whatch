var mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI);

var con = mongoose.connection;

con.once('open', () => console.log(`Connected to MongoDB on ${con.host}:${con.port}`));
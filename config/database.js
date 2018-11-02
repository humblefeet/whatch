var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/whatch',
{ useNewUrlParser: true }
);

var con = mongoose.connection;

con.once('open', () => console.log(`Connected to MongoDB on ${con.host}:${con.port}`));
// Required dependencies
const express = require('express');
const path = require('path');
const logger = require('morgan');
const cors = require('cors');
const session = require('express-session');
const passport = require('passport');
const User = require('./models/User');

// load the env vars
require('dotenv').config();

// Database connection
require('./config/database');
require('./config/passport');

// Define routes
var index = require('./routes/index');
var usersRouter = require('./routes/users');
var testsRouter =  require('./routes/test');

// create the Express app
var app = express();


// View engine setup (accepting default views location)
// app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Middleware setup
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'static')));
app.use(cors());
app.use(session({
	secret: process.env.SESSION_SECRET,
	saveUninitialized: true,
	resave: false
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(function(req, res, next) {
	if (req.user) {
		User.findById(req.user, function(err, user) {
			req.userModel = user;
			next();
		})
	} else {
		next();
	}
})

// Mount our routes
app.use('/', index);
app.use('/users', usersRouter);
app.use('/tests', testsRouter);

// Start the server listening for incoming requests
app.listen(process.env.PORT || 3000);
// Hello?
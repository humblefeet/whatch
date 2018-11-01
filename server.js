// Required dependencies
const express = require('express');
const path = require('path');
const logger = require('morgan');
const cors = require('cors');

// Database connection
require('./config/database');

// Define routes


// Create the app
const app = express();

// View engine setup (accepting default views location)
app.set('view engine', 'ejs');

// Middleware setup
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'static')));
app.use(cors());

// Mount our routes


// Start the server listening for incoming requests
app.listen(3000);
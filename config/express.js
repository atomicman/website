'use strict'

var express = require('express');
var path = require('path');

module.exports = function(){
	var app = express();



	// configure view engine
	app.set('views','./app/views')
	app.set('view engine', 'ejs');

	// TODO  remove this
	app.get('/react', function(req,res){
		console.log("React path: " + __dirname);
		res.sendFile(path.join(__dirname,'../app/views/reactTest.html'));
	});

	return app;
};

// var config = require('./config'),
// 	express = require('express'),
// 	bodyParser = require('body-parser'),
// 	passport = require('passport'),
// 	flash = require('connect-flash'),
// 	session = require('express-session');

// module.exports = function() {
// 	var app = express();

// 	app.use(bodyParser.urlencoded({
// 		extended: true
// 	}));

// 	app.use(bodyParser.json());

// 	app.use(session({
// 		saveUninitialized: true,
// 		resave: true,
// 		secret: 'OurSuperSecretCookieSecret'
// 	}));

// 	app.set('views', './app/views');
// 	app.set('view engine', 'ejs');

// 	app.use(flash());
// 	app.use(passport.initialize());
// 	app.use(passport.session());

// 	require('../app/routes/index.server.routes.js')(app);
// 	require('../app/routes/users.server.routes.js')(app);
// 	require('../app/routes/todos.server.routes.js')(app);

// 	app.use(express.static('./public'));

// 	return app;

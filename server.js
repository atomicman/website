'use strict'


var express = require('express');

// set the port of our application
// process.env.PORT lets the port be set by Heroku
var port = process.env.PORT || 8080;
var app = express();

// // set the view engine to ejs
// app.set('view engine', 'ejs');

// // make express look in the public directory for assets (css/js/img)
// app.use(express.static(__dirname + '/public'));

// // set the home page route
// app.get('/', function(req, res) {

//     // ejs render automatically looks in the views folder
//     res.render('index');
// });

app.listen(port, function() {
    console.log('Our app is running on http://localhost:' + port);
});


app.get('//', function(req,res){
	res.send('<p>Welcome to the digital dark side</p>' + 
		'<iframe width="560" height="315" src="https://www.youtube.com/embed/OX9I1KyNa8M" frameborder="0" allowfullscreen></iframe>');
});





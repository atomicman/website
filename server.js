'use strict'


var express = require(__dirname + '/config/express');

// set the port of our application
// process.env.PORT lets the port be set by Heroku
var port = process.env.PORT || 8080;
var app = express();


// make express look in the public directory for assets (css/js/img)
// app.use(express.static(__dirname + '/public'));

// // set the home page route
// app.get('/', function(req, res) {

//     // ejs render automatically looks in the views folder
//     res.render('index');
// });

app.listen(port, function() {
    console.log('Our app is running on http://localhost:' + port);
});


app.get('/', function(req,res){
	res.sendFile(__dirname + '/app/views/index.html');
});





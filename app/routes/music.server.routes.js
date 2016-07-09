'use strict'

module.exports = function(app){
	console.log('do we ever get here?');
	var musicCtlr = require('../controllers/music.server.controller');
	console.log(musicCtlr);
	if (musicCtlr != null){
		console.log('Music controller was successfully created');
	}
	app.get('/music', musicCtlr.render);
};
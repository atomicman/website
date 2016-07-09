'use strict'

vim app = angular.module('music');


app.controller('MusicCtlr', ['$scope',
	function($scope){
		console.log('we made it into the controller');

		function init(){
			console.log('did we get initialized');
		}
	}
]);

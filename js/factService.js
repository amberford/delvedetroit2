var app = angular.module('delveApp');

app.factory('factService', function($http) {
	var fact = '';
	return {
		getFact : function(year) {
			return $http({
			  method: 'GET',
			  url: 'https://whispering-wave-9659.herokuapp.com/',
			  params: {code: year}
			})
		}
	}
});
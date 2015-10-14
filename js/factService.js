var app = angular.module('delveApp');

app.factory('factService', function($http) {
	var fact = '';
	return {
		getFact : function(year) {
			$http({
			  method: 'GET',
			  url: 'https://whispering-wave-9659.herokuapp.com/',
			  params: {code: year}
			})
			.then(function successCallback(response) {
			    fact = response.data;
			    console.log('success');
			  }, function errorCallback(response) {
			    console.log('error?');
			});
			return fact;
		}
	}
})
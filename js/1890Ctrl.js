var app = angular.module('delveApp');

app.controller('1890Ctrl', function($scope, $http) {
	console.log('This page has loaded.');

	$scope.fact = '';

	$scope.getFact = function() {
		$http({
		  method: 'GET',
		  url: 'https://whispering-wave-9659.herokuapp.com/'
		})
		.then(function successCallback(response) {
		    $scope.fact = response.data;
		  }, function errorCallback(response) {
		    console.log('error?');
		});
	}
});
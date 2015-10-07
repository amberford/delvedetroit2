var app = angular.module('delveApp', ['ngRoute']);

app.config(function($routeProvider) {
	$routeProvider.when('/',
	{
		controller: 'mainCtrl',
		templateUrl: 'partials/main-view.html'
	});
/*	$routeProvider.when('/neighborhoods',
	{
		controller: 'NeighborhoodsCtrl',
		templateUrl: '/partials/neighborhoodsView.html'
	});*/
	$routeProvider.otherwise(
	{ 
		redirectTo: '/', 
	});
});
var app = angular.module('delveApp', ['ngRoute']);

app.config(function($routeProvider) {
	$routeProvider.when('/',
	{
		controller: 'mainCtrl',
		templateUrl: 'partials/main-view.html'
	});
	$routeProvider.when('/1960',
	{
		controller: '1960Ctrl',
		templateUrl: 'partials/1960-view.html'
	});
	$routeProvider.when('/1920',
	{
		controller: '1920Ctrl',
		templateUrl: 'partials/1920-view.html'
	});
	$routeProvider.when('/present',
	{
		controller: '2015Ctrl',
		templateUrl: 'partials/present-view.html'
	});
	$routeProvider.otherwise(
	{ 
		redirectTo: '/', 
	});
});
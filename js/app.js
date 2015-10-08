var app = angular.module('delveApp', ['ngRoute']);

app.config(function($routeProvider) {
	$routeProvider.when('/',
	{
		controller: 'mainCtrl',
		templateUrl: 'partials/present-view.html'
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
	$routeProvider.when('/1890',
	{
		controller: '1890Ctrl',
		templateUrl: 'partials/main-view.html'
	});
	$routeProvider.when('/museum',
	{
		controller: 'museumCtrl',
		templateUrl: 'partials/museum-view.html'
	});
	$routeProvider.otherwise(
	{ 
		redirectTo: '/', 
	});
});

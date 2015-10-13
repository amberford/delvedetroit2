var app = angular.module('delveApp');

app.controller('mainCtrl', function() {
	Cookies.set('year', '2015');
	var cookieYear = Cookies.get('year');
	if (cookieYear === '1890') {
		console.log('1890 it works!');
	} else if (cookieYear === '1920'){
		console.log('1920 code works!');
	} else if (cookieYear === '1960'){
		console.log('1960 works!');
	} else {
		console.log('2015 stuffs');
	}
	Cookies.remove('year');
});
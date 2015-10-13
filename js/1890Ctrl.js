var app = angular.module('delveApp');

app.controller('1890Ctrl', function() {
	Cookies.set('year', '1890');
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

app.directive('noRefresh', function() {
    return {
        restrict: 'A',
        link: function(scope, element, attrs) {
            $('#summary-2015').css('display', 'none');
			$('#summary-1960').css('display', 'none');
			$('#summary-1920').css('display', 'none');
			$('#summary-1890').css('display', 'inline-block');
			$('.year2015').css('background-color', '#fff');
			$('.year1960').css('background-color', '#fff');
			$('.year1920').css('background-color', '#fff');
			$('.year1890').css('background-color', '#f28d3f');
        }
    };
});
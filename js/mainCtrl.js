var app = angular.module('delveApp');

app.controller('mainCtrl', function() {
	Cookies.set('year', '2015');
		var cookieYear = Cookies.get('year');
	if (cookieYear === '1890') {
		$jq('#summary-2015').css('display', 'none');
		$jq('#summary-1960').css('display', 'none');
		$jq('#summary-1920').css('display', 'none');
		$jq('#summary-1890').css('display', 'inline-block');
		$jq('.year2015').css('background-color', '#fff');
		$jq('.year1960').css('background-color', '#fff');
		$jq('.year1920').css('background-color', '#fff');
		$jq('.year1890').css('background-color', '#f28d3f');
	} else if (cookieYear === '1920'){
		$jq('#summary-2015').css('display', 'none');
		$jq('#summary-1960').css('display', 'none');
		$jq('#summary-1920').css('display', 'inline-block');
		$jq('#summary-1890').css('display', 'none');
		$jq('.year2015').css('background-color', '#fff');
		$jq('.year1960').css('background-color', '#fff');
		$jq('.year1920').css('background-color', '#4b8a79');
		$jq('.year1890').css('background-color', '#fff');
	} else if (cookieYear === '1960'){
		$jq('#map-content').slideDown('slow');
		$jq('#summary-2015').css('display', 'none');
		$jq('#summary-1960').css('display', 'inline-block');
		$jq('#summary-1920').css('display', 'none');
		$jq('#summary-1890').css('display', 'none');
		$jq('.year2015').css('background-color', '#fff');
		$jq('.year1960').css('background-color', '#8c1e1d');
		$jq('.year1920').css('background-color', '#fff');
		$jq('.year1890').css('background-color', '#fff');
	} else {
		$jq('#summary-2015').css('display', 'inline-block');
		$jq('#summary-1920').css('display', 'none');
		$jq('#summary-1960').css('display', 'none');
		$jq('#summary-1890').css('display', 'none');
		$jq('.year2015').css('background-color', '#d1d96a');
		$jq('.year1960').css('background-color', '#fff');
		$jq('.year1920').css('background-color', '#fff');
		$jq('.year1890').css('background-color', '#fff');
	}
	Cookies.remove('year');
});
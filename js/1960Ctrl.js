var app = angular.module('delveApp');
var $jq = jQuery.noConflict();

app.controller('1960Ctrl', function($scope, factService) {

	$scope.fact = '';
	$scope.getFact = function() {
		$scope.fact = factService.getFact(1960);
	}

	Cookies.set('page', '1960');
		var cookieYear = Cookies.get('page');
	if (cookieYear === '1890') {
		$jq('#hide-all').fadeTo(500, 1);
		$jq('#map-content').slideDown(600);
		$jq('#timeline').slideDown(400);
		$jq('#map-content').hide().fadeTo(500, 1);
		$jq('#view-content').hide().delay(625).fadeTo(500, 1);

		$jq('#summary-2015').css('display', 'none');
		$jq('#summary-1960').css('display', 'none');
		$jq('#summary-1920').css('display', 'none');
		$jq('#summary-1890').css('display', 'inline-block');
		$jq('.year2015').css('background-color', '#fff');
		$jq('.year1960').css('background-color', '#fff');
		$jq('.year1920').css('background-color', '#fff');
		$jq('.year1890').css('background-color', '#f28d3f');
	} else if (cookieYear === '1920'){
		$jq('#hide-all').fadeTo(500, 1);
		$jq('#map-content').slideDown(600);
		$jq('#timeline').slideDown(400);
		$jq('#map-content').hide().fadeTo(500, 1);
		$jq('#view-content').hide().delay(625).fadeTo(500, 1);

		$jq('#summary-2015').css('display', 'none');
		$jq('#summary-1960').css('display', 'none');
		$jq('#summary-1920').css('display', 'inline-block');
		$jq('#summary-1890').css('display', 'none');
		$jq('.year2015').css('background-color', '#fff');
		$jq('.year1960').css('background-color', '#fff');
		$jq('.year1920').css('background-color', '#4b8a79');
		$jq('.year1890').css('background-color', '#fff');
	} else if (cookieYear === '1960'){
		$jq('#hide-all').fadeTo(500, 1);
		$jq('#map-content').slideDown(600);
		$jq('#timeline').slideDown(400);
		$jq('#map-content').hide().fadeTo(500, 1);
		$jq('#view-content').hide().delay(625).fadeTo(500, 1);

		$jq('#summary-2015').css('display', 'none');
		$jq('#summary-1960').css('display', 'inline-block');
		$jq('#summary-1920').css('display', 'none');
		$jq('#summary-1890').css('display', 'none');
		$jq('.year2015').css('background-color', '#fff');
		$jq('.year1960').css('background-color', '#8c1e1d');
		$jq('.year1920').css('background-color', '#fff');
		$jq('.year1890').css('background-color', '#fff');
	} else if (cookieYear === '2015') {
		$jq('#hide-all').fadeTo(500, 1);
		$jq('#map-content').slideDown(600);
		$jq('#timeline').slideDown(400);
		$jq('#map-content').hide().fadeTo(500, 1);
		$jq('#view-content').hide().delay(625).fadeTo(500, 1);

		$jq('#summary-2015').css('display', 'inline-block');
		$jq('#summary-1920').css('display', 'none');
		$jq('#summary-1960').css('display', 'none');
		$jq('#summary-1890').css('display', 'none');
		$jq('.year2015').css('background-color', '#d1d96a');
		$jq('.year1960').css('background-color', '#fff');
		$jq('.year1920').css('background-color', '#fff');
		$jq('.year1890').css('background-color', '#fff');
	} else {
		$jq('#hide-all').fadeTo(500, 0);
		$jq('#timeline').delay(500).slideUp(500);
		$jq('#map-content').slideUp(500);
		$jq('#view-content').hide().delay(200).fadeTo(200, 1);
		
		$jq('.year2015').css('background-color', '#fff');
		$jq('.year1960').css('background-color', '#fff');
		$jq('.year1920').css('background-color', '#fff');
		$jq('.year1890').css('background-color', '#fff');
	}
	Cookies.remove('page');
});

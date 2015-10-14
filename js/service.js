var app = angular.module('delveApp');
app.factory('jqTransitions', [function() {
	return {
		checkCookie: function(){
			var cookieYear = Cookies.get('page');
			console.log('OMGITSWORKING');
			if (cookieYear === '1890') {
				$jq('#map-content').slideDown('fast');
				$jq('#summary-2015').css('display', 'none');
				$jq('#summary-1960').css('display', 'none');
				$jq('#summary-1920').css('display', 'none');
				$jq('#summary-1890').css('display', 'inline-block');
				$jq('.year2015').css('background-color', '#fff');
				$jq('.year1960').css('background-color', '#fff');
				$jq('.year1920').css('background-color', '#fff');
				$jq('.year1890').css('background-color', '#f28d3f');
			} else if (cookieYear === '1920'){
				$jq('#map-content').slideDown('fast');
				$jq('#summary-2015').css('display', 'none');
				$jq('#summary-1960').css('display', 'none');
				$jq('#summary-1920').css('display', 'inline-block');
				$jq('#summary-1890').css('display', 'none');
				$jq('.year2015').css('background-color', '#fff');
				$jq('.year1960').css('background-color', '#fff');
				$jq('.year1920').css('background-color', '#4b8a79');
				$jq('.year1890').css('background-color', '#fff');
			} else if (cookieYear === '1960'){
				$jq('#map-content').slideDown('fast');
				$jq('#summary-2015').css('display', 'none');
				$jq('#summary-1960').css('display', 'inline-block');
				$jq('#summary-1920').css('display', 'none');
				$jq('#summary-1890').css('display', 'none');
				$jq('.year2015').css('background-color', '#fff');
				$jq('.year1960').css('background-color', '#8c1e1d');
				$jq('.year1920').css('background-color', '#fff');
				$jq('.year1890').css('background-color', '#fff');
			} else if (cookieYear === '2015') {
				$jq('#map-content').slideDown('fast');
				$jq('#summary-2015').css('display', 'inline-block');
				$jq('#summary-1920').css('display', 'none');
				$jq('#summary-1960').css('display', 'none');
				$jq('#summary-1890').css('display', 'none');
				$jq('.year2015').css('background-color', '#d1d96a');
				$jq('.year1960').css('background-color', '#fff');
				$jq('.year1920').css('background-color', '#fff');
				$jq('.year1890').css('background-color', '#fff');
			} else {
				$jq('#map-content').slideUp('slow');
				$jq('.year2015').css('background-color', '#fff');
				$jq('.year1960').css('background-color', '#fff');
				$jq('.year1920').css('background-color', '#fff');
				$jq('.year1890').css('background-color', '#fff');
			}
			Cookies.remove('page');
		}
	}
}]);

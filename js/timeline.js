jQuery(document).ready(function(){
	var $ = jQuery;
	$('#deeper').click(function(){
		$('#map-content').fadeOut('fast', function(){});
	})
	$('#about').click(function(){
		$('#map-content').fadeOut('fast', function(){});
	})
	$('#home').click(function(){
		$('#map-content').fadeIn('fast', function(){});
		$('#summary-2015').css('display', 'inline-block');
		$('#summary-1920').css('display', 'none');
		$('#summary-1960').css('display', 'none');
		$('#summary-1890').css('display', 'none');
		$('.year2015').css('background-color', '#d1d96a');
		$('.year1960').css('background-color', '#fff');
		$('.year1920').css('background-color', '#fff');
		$('.year1890').css('background-color', '#fff');
	})
	$('.year2015').click(function(){
		$('#map-content').fadeIn('fast', function(){});
		$('#summary-2015').css('display', 'inline-block');
		$('#summary-1920').css('display', 'none');
		$('#summary-1960').css('display', 'none');
		$('#summary-1890').css('display', 'none');
		$('.year2015').css('background-color', '#d1d96a');
		$('.year1960').css('background-color', '#fff');
		$('.year1920').css('background-color', '#fff');
		$('.year1890').css('background-color', '#fff');
	})
	$('.year1960').click(function(){
		$('#map-content').fadeIn('fast', function(){});
		$('#summary-2015').css('display', 'none');
		$('#summary-1960').css('display', 'inline-block');
		$('#summary-1920').css('display', 'none');
		$('#summary-1890').css('display', 'none');
		$('.year2015').css('background-color', '#fff');
		$('.year1960').css('background-color', '#8c1e1d');
		$('.year1920').css('background-color', '#fff');
		$('.year1890').css('background-color', '#fff');
	})
	$('.year1920').click(function(){
		$('#map-content').fadeIn('fast', function(){});
		$('#summary-2015').css('display', 'none');
		$('#summary-1960').css('display', 'none');
		$('#summary-1920').css('display', 'inline-block');
		$('#summary-1890').css('display', 'none');
		$('.year2015').css('background-color', '#fff');
		$('.year1960').css('background-color', '#fff');
		$('.year1920').css('background-color', '#4b8a79');
		$('.year1890').css('background-color', '#fff');
	})
	$('.year1890').click(function(){
		$('#map-content').fadeIn('fast', function(){});
		$('#summary-2015').css('display', 'none');
		$('#summary-1960').css('display', 'none');
		$('#summary-1920').css('display', 'none');
		$('#summary-1890').css('display', 'inline-block');
		$('.year2015').css('background-color', '#fff');
		$('.year1960').css('background-color', '#fff');
		$('.year1920').css('background-color', '#fff');
		$('.year1890').css('background-color', '#f28d3f');
	})
})
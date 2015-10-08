jQuery(document).ready(function(){
	var $ = jQuery;
	$('.year1890').click(function(){
		$('#summary-2015').css('display', 'none');
		$('#summary-1920').css('display', 'none');
		$('#summary-1960').css('display', 'none');
		$('#summary-1890').css('display', 'inline-block');
	})
	$('.year2015').click(function(){
		$('#summary-2015').css('display', 'inline-block');
		$('#summary-1920').css('display', 'none');
		$('#summary-1960').css('display', 'none');
		$('#summary-1890').css('display', 'none');
	})
})
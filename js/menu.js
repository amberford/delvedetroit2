/*Script for controlling responsive menu*/

jQuery(document).ready(function(){

	var $ = jQuery;

	$('#hamburger').click(function(){
		if($('.mobile-menu').css('display') == 'none'){
			$('.mobile-menu').slideDown(250);
		}
		else {
			$('.mobile-menu').slideUp(250);
		}
	})
	$('.mobile-menu').click(function(){
		$('.mobile-menu').slideUp(250);
	})

})

jQuery(document).ready(function($) {
	
	('.lightbox_trigger').click(function(e) {
	
	e.preventDefault();
	var image_hrf=$(this).attr("href");

	if ($('lightbox').length>0){
		$('#content').html('<img src=" ' + img_href +' "/>');
		$('#lightbox').show
	}

	else{
		var lightbox =
		'<div id="light>' +
		'<p> Click to cliose</p>'+
		'<div id ="content">' +'<img src="' + image_href+'"/>'+
		'</div>'+
		'</div>';

		$('body').append(lightbox)
	}

	$('#lightbox').live('click', function() {
	$('#lightbox').hide();
});

});
});
</script>

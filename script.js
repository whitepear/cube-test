$(document).ready(function() {
	$('.cube').click(function() {
		$(this).addClass('spun');
		setTimeout(function() {
			$(this).removeClass('spun');
		}, 1000)
	});	
});
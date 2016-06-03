$(document).ready(function() {
	$('.cube').click(function() {
		$(this).css('transform', 'rotateY(360deg)');

		setTimeout(function() {
			$(this).css('transform', 'rotateY(0deg)');
		}, 1000);
	});	
});
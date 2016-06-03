
	$('.cube').click(function() {
		$('.cube').css('transform', 'rotateY(360deg)');

		setTimeout(function() {
			$('.cube').css('transform', 'rotateY(0deg)');			
		}, 1000);
	});	

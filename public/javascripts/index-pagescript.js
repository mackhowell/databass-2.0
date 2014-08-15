$(function() {
	// Try with just jquery animation
	// function loop() {
	// 	// Animate the test image
	// 	$("#test-image").animate(
	// 		{ left: 1000 }, {
	// 		duration: 10000,
	// 		// step: function(now, fx) {
	// 		//   $("#test-image").css('left', now);
	// 		// }
	// 		complete: function() {
	// 			$("#test-image").animate(
	// 				{left: 0}, {
	// 				duration: 10000, 
	// 				complete: loop});
	// 		}
	// 	});
	// }
	// loop();

	// If off screen...
	jQuery.expr.filters.offscreen = function(el) {
		return ( (el.offsetLeft + el.offsetWidth) < 0 || (el.offsetTop + el.offsetHeight) < 0 || (el.offsetLeft > window.innerWidth || el.offsetTop > window.innerHeight) );
	};

	// setInterval(function(){
	// 	$('.gif').each(function(){

	// 		if($(this).is(':offscreen')){

	// 			var offset = Math.floor((Math.random() * 200) - 19);
	// 			$(this).css({ 'top': offset + '%' });

	// 		}

	// 	});
	// }, 10);
});
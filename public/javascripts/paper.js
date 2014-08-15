// console.log('top of the scripe');

// working w rasters:
// http://paperjs.org/tutorials/images/working-with-rasters
// http://www.paufler.net/BrettCode/paperJS_Tutorial/paperJS-028-Rasters.html

// var website = 'images/WWWDATABASSB_06005.gif';

// var seaweed_source = [
// 	'images/ani-oyster.gif',
// 	'images/beach_seaweed04.gif',
// 	'images/beach_seaweed06.gif',
// 	'images/big_data_empty.gif',
// 	'images/BWNWDANI.gif',
// 	'images/data_plan.gif',
// 	'images/money_computer.gif',
// 	'images/risebubs.gif',
// 	'images/seaweed7-tall.gif',
// 	];

// var test_image = $("#test-image");
// var ani_oyster = $("#ani-oyster");
// var seaweed_04 = $("#seaweed-04");
// var seaweed_06 = $("#seaweed-06");
// var big_data_empty = $("#big-data-empty");
// var red_seaweed = $("#red-seaweed");

// var seaweed_source = [
// 	test_image,
// 	ani_oyster,
// 	seaweed_04,
// 	seaweed_06,
// 	big_data_empty,
// 	red_seaweed,
// ];

// Draw image tests
// var imagetest = new Image();
// imagetest.src = seaweed_source[1];
// var monaSrc = "http://img.wikinut.com/img/k1irod2.y_yiv37k/jpeg/0/Mona-Lisa.jpeg";

// Loop through array of images and put it somewhhere.
// for (var i = 0; i < seaweed_source.length; i++) {
// 	var seaweed_raster = new Raster(seaweed_source[i]);
// 	var destination = Point.random() * view.size;
// 	// var seaweed_placed = seaweed_raster.place(local);
// 	seaweed_raster.position = view.center;
// }

// console.log('before onFrame');

// Animate the objects
// function onFrame(event) {
// 	for (var i = 0; i < seaweed_source.length; i++) {
// 		var item = project.activeLayer.children[i];

// 		item.position = view.center;

// 		// Move the item 1/20th of its width to the right. This way
// 		// larger circles move faster than smaller circles:
// 		item.position.x += item.bounds.width / 20;

// 		// If the item has left the view on the right, move it back
// 		// to the left:
// 		if (item.bounds.left > view.size.width) {
// 			item.position.x = -item.bounds.width;
// 		}
// 	}
// }

// /*enlarging the image when zoomed in */
// function zoomIn(x) {
//     let current_width = x.clientWidth;
//      x.style.width = (current_width + 100) + "px";        
// }

// /*resizing the image when zoomed out*/
// function zoomOut(x) {
//     let current_width = x.clientWidth;
//     x.style.width = (current_width - 100) + "px";  
// }

// $(document).ready(function() {
	
// 	$("#myDiv h2").click(
// 		function() {
// 			$(this).toggleClass("quote");
// 		    $(this).next().slideToggle(1000);
// 	    }
//     ); 
// }); 

$(document).ready(function() {
	// create an array of the slide images
	var image, imageCounter = 0, imageCache = [];
	$("#myDiv img").each(function() {	
		image = new Image();
        image.src = $(this).attr("src");
        image.title = $(this).attr("alt");
        imageCache[imageCounter] = image;
        imageCounter++;
   	});
	
	// start slide show
	imageCounter = 0;
	var nextImage;
    setInterval( function () {
        $("#caption").fadeOut(1800); 
       	$("#slide").fadeOut(1800,
			function() {
				imageCounter = (imageCounter + 1) % imageCache.length;
	        	nextImage = imageCache[imageCounter];
		    	$("#slide").attr("src", nextImage.src).fadeIn(1000);
			    $("#caption").text(nextImage.title).fadeIn(1000);		
			}        	
           ); 
        
    },	
    3000);
}); 


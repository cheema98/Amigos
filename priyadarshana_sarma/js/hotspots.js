
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

$(document).ready(function() {
	
	$("#myDiv h2").click(
		function() {
			$(this).toggleClass("quote");
		    $(this).next().slideToggle(1000);
	    }
    ); 
}); 



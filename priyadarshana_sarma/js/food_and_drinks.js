// var imagesArray = ["images/restaurant1.jpg", "images/food2.jpg", "images/nightclub34.jpg"]; // declaring an array of images

// // automatically switch to the next image
// var difference = imagesArray.length - 1; //get the last element of the array
// var imageNumber = difference; // set the last element to the imageNumber so that the slides will start from the first image

// var delay = 1500;
// setInterval("ChangeImages(1)", delay); // change the slides in forward direction

// function ChangeImages(direction) {
//     imageNumber = imageNumber + direction;
//     //move to the first slide after the last
//     if(imageNumber > difference) {
//         imageNumber = 0;
//     }
//     //move to the last slide after the first
//     if(imageNumber < 0) {
//         imageNumber = difference;
//     }
//     document.getElementById('slideshow').src = imagesArray[imageNumber];
// }


/*enlarging the image when zoomed in */
function zoomIn(x) {
    let current_width = x.clientWidth;
     x.style.width = (current_width + 100) + "px";        
}

/*resizing the image when zoomed out*/
function zoomOut(x) {
    let current_width = x.clientWidth;
    x.style.width = (current_width - 100) + "px";  
}


/* gallery */
function init_gallery(){
    var img_code = ["GAd9FH8DPTs", "VIT-zhyiAoo", "-mKF83BndXY"];
    var img_pos = 0;

    // assign first image to show on gallery
    document.getElementById("gallery").innerHTML += "<a href=\"https://www.youtube.com/embed/"+img_code[img_pos]+"\" target=\"blank\" id=\"gallery_src\"><img src=\"images/christine/watch-now.gif\" id=\"gallery_overlay\" class=\"magnify\"><img src=\"https://img.youtube.com/vi/"+img_code[img_pos]+"/maxresdefault.jpg\" id=\"gallery_img\"></a>";

    // every 5 seconds, change the url.
    setInterval( function(){
        img_pos += 1;

        if (img_pos == img_code.length) {
            img_pos = 0;
        }

        get_next_image(img_code[img_pos]);
        
    }, 5000);

}

/* change the anchor and img src codes */
function get_next_image(code) {

    document.getElementById("gallery_src").setAttribute('href', "https://www.youtube.com/embed/"+code);

    document.getElementById("gallery_img").setAttribute("src", "https://img.youtube.com/vi/"+code+"/maxresdefault.jpg");

}

init_gallery();
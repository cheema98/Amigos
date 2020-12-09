// cretes the navigation on all three features
function init_nav_list(){
    console.log("init");

    var nav_items = [
        ["index.html", "Home"],
        ["about.html", "About"],
        ["city.html", "City"],
        ["", "Hotspots"],
        ["", "Food and Drinks"],
        ["", "Transportation"],
        ["", "Accomodation"],
        ["", "Shopping"],
        ["", "Map"],
        ["", "Gallery"],
        ["", "Services"],
        ["", "Contact Us"],
    ]

    /* nav lists */
    let result = "<ul>";
    for(let i = 0; i < nav_items.length; i++){
        result += "<li><a href=\"" + nav_items[i][0] + "\">"
            + nav_items[i][1] + "</a></li>";
    }
    result += "</ul>";
    document.getElementById('nav_menu').innerHTML += result;    
    
}


init_nav_list();
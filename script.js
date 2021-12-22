function dropdownmenu() {
    var x = document.getElementById("dropDownClick");
    if (x.className === "nav_ul") {
        x.className += " responsive";

        /*change nav_ul to nav_ul.responsive*/
    } else {
        x.className = "nav_ul";
    }
}
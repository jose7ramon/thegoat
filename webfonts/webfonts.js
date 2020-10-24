var fonts = ["amarat-bold", "arima-madurai", "catamaran", "conforta", "conforta-bold", "de-valencia", "densia", "emblem", "haetten-schweiler", "lemonada", "lobster", "manrope", "monoton", "montserrat", "nunito", "oswald", "permanent-maker", "pompiere", "restu", "roboto","spoken", "sweet-leaf", "transformer", "varela", "zanzabar"];

var numFonts = fonts.length;
var x = document.getElementById("body");

function cambioFuente() {
    let f = document.getElementById("fuentes").selectedIndex;
    let font = fonts[f];
    document.getElementById("muestra").className = "font-" + font;
    document.getElementById("fuente").innerHTML = font;
}
cambioFuente();
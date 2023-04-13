'use strict'
// BOM - Browser Object MOdel
function getBom(){
    console.log(window.innerWidth); // Ancho de la pantalla del Cliente en Px
    console.log(window.innerHeight);// Alto de la pantalla " " en px
    console.log(screen.width);
    console.log(screen.height);
    console.log(window.location);
    console.log(window.location.href);
}
getBom();

// Funcion para redirigir a otra URL
function redirect(url){
    window.location.href = url;
}

// Funcion para abrir una nueva vista
function OpenURL(url){
    window.open(url,"","width=300,height=300");
}
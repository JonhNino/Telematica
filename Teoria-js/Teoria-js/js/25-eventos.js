'use strict'

// Evento Load: Este se dispara cuando todos los elementos HTMl del DOM hayan sido cargados
// al navegador

// Este evento se utilza generalmente, para no tener que cargar los ficheros .js al final del body
// Sino en la sección de <head>, donde es mpas recomendable apra hacer buenas prácticas.
window.addEventListener('load',function(){
    console.log("La pagina se cargó");
});

// Funcion de cambiar color
function changeColor(name,color){
    name.style.background = color;
}

// Eventos del raton
var btn1 = document.getElementById("btn1");


// Evento Click para un boton
btn1.onclick = function(){
    changeColor(btn1,"red");
    // btn1.style.display = "none";
    this.style.display = "none";
    // El metodo this, representa al elemento HTML que ocasiona el evento
}

// Evento Doble Click
btn1.ondblclick = function(){
    changeColor(btn1,"yellow");
}

// Otra manera de agregar eventos
btn1.addEventListener('click',function(){
   console.log("click");
});

// Evento MouseOver
btn1.addEventListener('mouseover',function(){
    changeColor(btn1,"red");
});

// Evento MouseOut
btn1.addEventListener('mouseout',function(){
    changeColor(btn1,"white");
});
// Nota: Una diferencia entre estas dos formas de escuchar eventos, es que 'addEventListener', se
// ejecuta primero que 'onevent'.


// ALGUNOS EVENTOS DEL TECLADO
var txtuser = document.querySelector('#txtuser');

// Evento Focus: cuando se hace click dentro del input
txtuser.addEventListener('focus',function(){
    console.log("[focus] Estas dentro del Input");
});
// Evento Blur: cuando se hace click fuera del inpur
txtuser.addEventListener('blur',function(){
    console.log("[blur] Estas fuera del Input");
});
// Evento Keydown: Cuando se esta presionando una tecla del teclado
txtuser.addEventListener('keydown',function(event){
    // String.fromCharCode(event.keyCode), detecta la tecla presionada y la convierte a String
    console.log("[keydown] Estas presionando la tecla",String.fromCharCode(event.keyCode));
});
// Evento Keypress: Cuando se presiona una tecla del teclado
txtuser.addEventListener('keypress',function(event){
    // String.fromCharCode(event.keyCode), detecta la tecla presionada y la convierte a String
    console.log("[keypress] Presionaste la tecla",String.fromCharCode(event.keyCode));
});
// Evento Keyup: Cuando se suelta una tecla del teclado
txtuser.addEventListener('keyup',function(event){
    // String.fromCharCode(event.keyCode), detecta la tecla presionada y la convierte a String
    console.log("[keyup] Soltaste la tecla",String.fromCharCode(event.keyCode));
});


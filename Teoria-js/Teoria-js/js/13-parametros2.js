'use strict'

// Parámetros REST y SPREAD
function listadoFrutas(fruta1,fruta2,fruta3,...resto_de_frutas){
    console.log("Fruta 1: ",fruta1);
    console.log("Fruta 2: ",fruta2);
    console.log("Fruta 3: ",fruta3);
    console.log(resto_de_frutas);
}
// Ejemplo parámetro REST
listadoFrutas("manzana","naranja","platano","coco","sandia","pera");

// Ejemplo parámetro SPREAD
var frutas = ["papaya","limon"];

listadoFrutas(...frutas,"mango");
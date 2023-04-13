'use strict'

//  Metodos muy practicos para hacer busquedas en Arrays

var juegos = new Array("pes 2013","NFS","mario","soccer");

// Metodo Find(), cuando encuentra el elemento, retorna un nuevo string con el valor encontrado.
// Si no existe dicho elemento, entonces retorna undefined
var busqueda = juegos.find(juego => juego == "NFS7");
console.log(busqueda);

// Metodo FindIndex(), retorna la posicion del elemento, si es que existe. Si no existe entrega -1
var busqueda = juegos.findIndex(juego => juego == "NFS7");
console.log(busqueda);

// Metodo some(), retorna true o false dependiendo el resultado
var busqueda = juegos.some(juego => juego == "NFS")
console.log(busqueda);
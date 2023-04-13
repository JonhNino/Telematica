'use strict'

window.addEventListener('load',function(){
    // JSON - JavaScript    Object Notation
    // Objeto json 1
    var pelicula = {
        nombre: "El amor duele",
        year: 2020,
        pais: "Colombia"
    }
    // Acceder a una propiedad el JSON
    console.log(pelicula.nombre);
    // Modificar una propiedad
    pelicula.nombre = "la mascara";
    console.log(pelicula.nombre);
    // Objeto json 2
    var serie = {
        nombre: "Naruto",
        year: 2018,
        pais: "Japón"
    }

    // Array asociativo con Json
    var arrayJson = [
        {nombre: "el chavo", year: 2008, pais:"Mexico"},
        pelicula,
        serie
    ];

    console.log(arrayJson);


});
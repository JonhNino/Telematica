'use strict'

// Obteneer Fechas
var fecha = new Date();

var year = fecha.getFullYear();
var mes = fecha.getMonth();
var dia = fecha.getDate();
var hora = fecha.getHours();
var min = fecha.getMinutes();
var seg = fecha.getSeconds();


var textoFecha = `
    año: ${year}
    mes: ${mes+1}
    dia: ${dia}
    hora: ${hora}
    min: ${min}
    seg: ${seg}
`;

console.log(textoFecha);

// Funciones matematicas: Consultar https://www.w3schools.com/js/js_math.asp

var amor = document.getElementById("hola");




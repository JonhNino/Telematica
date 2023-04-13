'use strict'

var nombre = prompt("Ingresa tu primer nombre: ");
var apellido = prompt("Ingresa tu primer apellido: ");

var texto_plantilla = `
    <h1>Hola esta es una plantilla de HTML</h1>
    <h3> Tu nombre es: ${nombre}
    <h3> Tu apellido es: ${apellido} </h3>
`;

document.write(texto_plantilla);
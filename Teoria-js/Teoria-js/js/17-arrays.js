'use strict'

/*
    Declaración y uso de Arrays
*/
var nombres = ["johan","felipe","carlos","andres"];
var apellidos = new Array("fernandez","rojas","zorro","arias");
console.log("Mostrar Arreglo 1: ");
console.log(nombres);
console.log("Mostrar Arreglo 2: ");
console.log(apellidos);
// Tamaño de un arreglo
console.log(`Tamaño del arreglo nombres: ${nombres.length}`);
console.log(`Tamaño del arreglo apellidos: ${apellidos.length}`);
console.log(`Valor del arreglo nombres: ${nombres[1]}`);
console.log(`Valor del arreglo apellidos: ${apellidos[2]}`);

// Recorrer arrays o arreglos
document.write("<h1> Estos son nuestros Nombres </h1>");
document.write("<ol>");
// 1. Metodo del ciclo For
for(var i=0;i<nombres.length;i++){
    document.write(`<li> ${nombres[i]} </li>`);
}
// 2. Metodo forEach
document.write("<h1> Estos son nuestros Apellidos </h1>");
apellidos.forEach((elemento,indice,arreglo)=>{
    console.log(elemento);        
    console.log(indice);
    console.log(arreglo);
    document.write(`<li> ${elemento} </li>`);
});
document.write("</ol>");


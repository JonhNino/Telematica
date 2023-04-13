'use strict'

/**
 * Operaciones utilizando Arrays
 * Definición de arrays multidimensionales
*/

var paises = new Array("Colombia","España","México");
var capitales = ["Bogotá","Madrid","Ciudad de México"];

// Definición de un array de dos dimensiones
var paises_capitales = [paises,capitales];

// Como acceder a un elemento de un array multi-dimensional
console.log(paises_capitales[0][1]);
console.log(paises_capitales[1][1]);

// Como agregar otra dimension
var poblacion = ["1000","500","300"];
paises_capitales.push(poblacion);
console.log(paises_capitales);

// Operaciones con arrays
var pais = "";
do{
    pais = prompt("Ingrese un país");
    paises.push(pais); // Se utiliza para agregar un nuevo elemento al array
}while(pais != "FIN");

paises.pop();    // Se utiliza para eliminar el último elemento del array
console.log("Información del arreglo paises: ")
console.log(paises);


// Como eliminar un elemento en específico en un array
var indice = 0;
do{
    pais = prompt("Ingrese el pais a eliminar");
    indice = paises.indexOf(pais);
    if(indice > -1){
        console.log(indice);
        paises.splice(indice,1);
        console.log(paises);
    }else{
        alert("Este pais no existe!!!");
    }
}while(pais != "NO");
console.log("Luego de Eliminar");
console.log(paises);
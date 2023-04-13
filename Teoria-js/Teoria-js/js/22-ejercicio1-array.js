'use strict'

/**
 * 1. El programa debe pedir 6 numeros por pantalla y guardarlos dentro de un Array
 * 2. Mostrar el array en el body y en consola
 * 3. Ordenarlo y Mostrarlo
 * 4. Invertir su orden y mostrarlo
 * 5. Mostrar cuantos elementos tiene el array
 * 6. Buscar un numero introducio por el usuario
 */

 function mostrarArray(array, textcustome = ""){
     document.write(`<h1> El array ${textcustome} es: </h1>`);
     document.write("<ul>");
     array.forEach((elemento,indice)=>{
        document.write("<li>"+ elemento +"</li>")
     });
     document.write("</ul>");
 }

 // Solicitud de Informacion
 var numeros = [];
 var cnt = 0;
do{
    //var numero = parseInt(prompt("Por favor Introduzca un número",0));
    numeros.push(parseInt(prompt("Por favor Introduzca un número",0)));   // Añadimos un nuevo elemento al array
    cnt++;
}while(cnt <= 5);
cnt = 0;
// Mostrar datos ingresados por consola
console.log("Los números introducidos fueron: ");
console.log(numeros);
// Mostrar array en el body
mostrarArray(numeros,"ingresado");

// Ordenar los numeros, el metodo sort ordena de manera alfabética, si queremos
// ordenar los números de manera numérica hay que utilizar sort(function(a,b)=> a-b) de menor a mayor y b-a de mayor a menor
numeros.sort(function(a,b) {return(a-b)});
console.log("Los numeros ordenados de menor a mayor son: ");
console.log(numeros);
mostrarArray(numeros,"ordenado de menor a mayor");
// Invertir el orden
numeros = numeros.reverse();
console.log("Los números invertidos son: ");
for(let numero in numeros){
    console.log(numeros[numero]);
}
mostrarArray(numeros,"invertido");

// contar elementos de un array
document.write("<h1>El array tiene "+numeros.length+" elementos </h1>");

// hacer una busqueda en el array
var busqueda = parseInt(prompt("Busque un número: ",0));
var posicion = numeros.findIndex(numero => numero == busqueda);

if(posicion == -1){
    document.write("<strong> No se encontró ningún elemento </strong>");
}else{
    document.write("<strong> Busqueda exitosa, posición: "+posicion+"</strong>");
}


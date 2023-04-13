'use strict'

/**
 * Funciones anónimas: Son aquellas que no tienen nombre, pero aun así reciben parámetros y ejecutan ciertas tareas.
 * Callbacks: Son funcioones anonimas tomadas como parámetros de otras funciones
 */

 // Función anónima
 var a = function(dato){
     console.log(dato);
 }


 // Callback
 function sumar(numero1,numero2,mostrarsuma){
     var suma = numero1+numero2;
     mostrarsuma(suma);
     return suma;
 }

 sumar(4,5, function(dato){
     console.log("La suma es:"+dato);
 });


// Funciones Flecha
function restar(numero1,numero2,mostrarresta){
    var resta = numero1 - numero2;
    mostrarresta(resta);
    return resta;
}

restar(7,4,(dato)=>{
    console.log(dato);
});
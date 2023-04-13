'use strict'

/**
 * Ejercicio 6: Solicitar un número al usuario y determinar si es numero par o impar
 */

var num = 0;        // numero solicitado
var residuo = 0;    // residuo
do{
    num = Number(prompt("Por favor introduce un número: ",1));
}while(isNaN(num));

residuo = num%2;
if(residuo == 0){
    console.log("El número "+num+" es par");
}else{
    console.log("El número "+num+" es impar");    
}
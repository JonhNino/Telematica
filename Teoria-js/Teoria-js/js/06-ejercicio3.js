'use strict'

/**
 * Ejercicio 3: Hacer un programa que solicite al usuario dos números y que muestre todos los números que
 * están contenidos en dicho intervalo
 */

 var num1 = parseInt(prompt("Por favor ingrese el primer dato",0));
 var num2 = parseInt(prompt("Por favor ingrese el segundo dato",0));
 var num_menor = 0;
var num_mayor = 0;
 if(num1>num2){
     num_mayor = num1;
     num_menor = num2;
 }else if(num2>num1){
     num_mayor = num2;
     num_menor = num1;
 }
do{
    num_menor++; 
    console.log(num_menor);
}while(num_menor<(num_mayor-1));

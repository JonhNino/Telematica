'use strict'

/**
 * Ejercicio 7: Mostrar la tabla de multiplicar de un número ingresado por el usuario
 */

 var num = 0;           // numero ingresado

 do{
    num = Number(prompt("Ingresa un número para saber su tabla de multiplicar"),1);
 }while(isNaN(num));

 for(var i=1;i<=10;i++){
     console.log(num+"x"+i+" = "+num*i);
 }
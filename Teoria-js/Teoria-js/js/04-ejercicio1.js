'use strict'

/*
    Ejercicio 1: Programa que solicita dos números y dice cual  
    es el mayor, el menor y si son iguales.
    Plus: Si alguno de los datos no es un número, ó , es menor o  igual
    que cero, entonces que me vuelva a pedir los datos.
*/

var num1 = Number(prompt("Ingresa el primer número: ", 1));
var num2 = Number(prompt("Ingresa el segundo número: ", 2));

while(num1<0 || num2<0 || isNaN(num1) || isNaN(num2)){
    num1 = Number(prompt("Ingresa el primer número: ", 1));
    num2 = Number(prompt("Ingresa el segundo número: ", 2));
}

if(num1 > num2){
    console.log("El número "+num1+" es mayor que "+num2);
}
if(num1 < num2){
    console.log("El número "+num2+" es mayor que "+num1);
}
if(num1 == num2){
    console.log("Los números son iguales");
}


'use strict'

/**
 * Ejercicio 8: Realizar una calculadora que cumpla con:
 * 1. Solicitar dos números al usuario y validarlos para poder operarlos
 * 2. Mostrar en el body del html, mediante un alert y por medio de la consola de comandos el resultado de las
 * 4 operaciones básicas entre los dos numeros ingresados. 
 */

 var num1 = 0;          // numero 1
 var num2 = 0;          // numero 2

 do{
    num1 = Number(prompt("Introduce el primer número: ",1));
    num2 = Number(prompt("Introduce el segundo número: ",1));
    if(num2 == 0){
        alert("La división por cero No existe!")
    }
 }while(isNaN(num1) || isNaN(num2) || num2 == 0);

 document.write("<h1> Los resultados son: </h1>");
 document.write("1. "+num1+"+"+num2+" = "+(num1+num2)+"<br>");
 document.write("2. "+num1+"-"+num2+" = "+(num1-num2)+"<br>");
 document.write("3. "+num1+"x"+num2+" = "+(num1*num2)+"<br>");
 document.write("4. "+num1+"/"+num2+" = "+(num1/num2)+"<br>");

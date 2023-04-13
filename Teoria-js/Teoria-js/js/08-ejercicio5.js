'use strict'

/**
 * Ejercicio 5: Mostrar todos los números divisores de un número ingresado por el usuario
 */

 var num = 0;
 var residuo = 0;
 var divisores = [];

 do{
    num = Number(prompt("Por favor introduce un número para saber sus divisores",0));
 }while(isNaN(num));
 document.write("<h1> Los divisores de "+num+" son:")
for(var i=num;i>0;i--){
    residuo = num%i;
    if(residuo == 0){
        document.write("<br>"+i.toString());
    }
}


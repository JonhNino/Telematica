'use strict'

/**
 * Ejercicio 4: Mostrar todos los números impares que estan contenidos entre dos números
 */

 var num1 = 0;      // numero 1
 var num2 = 0;      // numero 2
 var residuo = 0;   // residuo
 var num_menor = 0; // numero menor
 var num_mayor = 0; // numero mayor
 var numeros_pares = [];
 var numeros_impares = [];

 do{
     num1 = Number(prompt("Por favor introduce el primer número",0));
     num2 = Number(prompt("Por favor introduce el segundo número",0));
     if(!isNaN(num1) && !isNaN(num2)){
         if(num1 > num2){
             num_mayor = num1;
             num_menor = num2;
         }else if(num1 < num2){
             num_menor = num1;
             num_mayor = num2;
         }
         for(var i=num_menor;i<=num_mayor;i++){
             residuo = i%2;
             if(residuo == 0){
                 // el número es par
                 numeros_pares.push(i.toString());
                 
             }else if(residuo == 1){
                 //el numero es impar
                 numeros_impares.push(i.toString());
                 
             }
         }
     }
 }while(isNaN(num1) || isNaN(num2));

document.write("<h1>Los números pares contenidos entre "+num_menor+" y "+num_mayor+" son: </h1>");
numeros_pares.forEach(function(item,index){
    document.write((index+1)+". "+item+"<br>");
});
document.write("<h1>Los números impares contenidos entre "+num_menor+" y "+num_mayor+" son: </h1>");
numeros_impares.forEach(function(item,index){
    document.write((index+1)+". "+item+"<br>");
});
'use strict'

/**
 * Ejercicio 2: Calcular la suma y el promedio de los números ingresados por el usuario,
 * hasta que éste introduzca un número negativo, luego mostrar el resultado.
 */
/*
 var suma = 0;      // variable para la suma
 var media = 0;     // variable para la media
 var CantDatos = 0; // cantidad de datos ingresados
 var numIn = 1;     // número ingresado
 while(isNaN(numIn) || numIn>0){
    numIn = Number(prompt("Introduzca un número: ",1));
    if(!isNaN(numIn) && numIn>0){
        suma = suma + numIn;
        CantDatos++;
    }else if(numIn<=0){
        break;
    }     
 }
 // Calculamos la media
 media = suma/CantDatos;
 // El usuario ingresó un número negativo
 alert("La suma es: "+suma);
 alert("La media es: "+media);*/

 /* Otra manera de resolverlo */
 var suma = 0;
 var contador = 0;
 var numero = 0;
 do{
    numero = Number(prompt("Introduzca números hasta ingresar un dato negativo",0))
    if(isNaN(numero)){
        numero = 0;
    }else if(numero >=0 ){
        suma += numero;
        contador++;
    }
 }while(numero >= 0);

 alert("La suma de todos los números es: "+suma);
 alert("La media es: "+(suma/contador));
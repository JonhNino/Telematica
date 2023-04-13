'use strict'
function porConsola(numero1,numero2){
    console.log("1. "+numero1+"+"+numero2+" = "+(numero1+numero2));
    console.log("2. "+numero1+"-"+numero2+" = "+(numero1-numero2));
    console.log("3. "+numero1+"x"+numero2+" = "+(numero1*numero2));
    console.log("4. "+numero1+"/"+numero2+" = "+(numero1/numero2));
}
function porPantalla(numero1,numero2){
    document.write("<h2> Resultados: </h2> <hr>");
    document.write(" 1. "+numero1+"+"+numero2+" = "+(numero1+numero2)+"<br>");
    document.write(" 2. "+numero1+"-"+numero2+" = "+(numero1-numero2)+"<br>");
    document.write(" 3. "+numero1+"x"+numero2+" = "+(numero1*numero2)+"<br>");
    document.write(" 4. "+numero1+"/"+numero2+" = "+(numero1/numero2)+"<br>");
}

function calculadora(numero1,numero2,mostrar=false){
    if(mostrar == false){
        porConsola(numero1,numero2);
    }else{
        porPantalla(numero1,numero2);
    }
}

calculadora(2,5,true);
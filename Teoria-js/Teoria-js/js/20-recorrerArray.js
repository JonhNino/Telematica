'use strict'

// Formas de recorrer un Array

var frutas =["papaya","manzana","banano","pera"];

// Metodo ForEach
document.write("<h1>Lista de Frutas con ForEach</h1>");
frutas.forEach((elemento,indice)=>{
    document.write(`<li>${indice+1}. ${elemento}</li>`);
})

// Metodo For In
document.write("<h1>Lista de Frutas con For In</h1>");
for(let fruta in frutas){
    document.write(`<li>${frutas[fruta]}</li>`);
}
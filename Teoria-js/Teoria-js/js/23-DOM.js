'use strict'
var txtDOM = document.getElementById("txtDOM");
txtDOM.innerHTML = "Hola mundo";

var texto = txtDOM.textContent;
console.log(texto);

var btnList = document.querySelectorAll('button');
btnList[0].innerHTML = "Nuevo";
btnList[1].innerHTML = "Nuevo1";
btnList[2].innerHTML = "Nuevo2";

var btnListClase = document.querySelectorAll('button.btn');
btnListClase[0].innerHTML = "Hola";
btnListClase[1].innerHTML = "Hola1";
btnListClase[2].innerHTML = "Hola2";

  
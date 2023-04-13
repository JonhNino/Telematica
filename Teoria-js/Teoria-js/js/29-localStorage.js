'use strict'

// Local storage: Pemite almacenar información en el navegador y mantenerla alli durante toda
// la sesion, para acceder a esta información, se debe buscar dentro de las herramientas del 
// desarrollador, la opción Application

// Como saber si nuestro navegador es compatbile con el local storage
if(typeof(Storage)!= 'undefined'){
    console.log("Local Storage disponible");
}else{
    console.log("Local Storage No compatible con el navegador");
}

// ¿Como almacenar un elemento en el local Storage?
// Solamente se pueden almacenar datos tipo String
var nombre = "Johan Andrés FZ10";
var edad = 22;
var nacionalidad = "Colombiano";
localStorage.setItem("nombre", nombre);
localStorage.setItem("edad", edad); // En este caso el lo interpreta como String
localStorage.setItem("nacionalidad", nacionalidad);
// Guardar un array
var usuario1 = new Array("JohanAFZ10",22,"Colombiano");
console.log(usuario1);
localStorage.setItem("usuario 1", usuario1);

// Como recuperar un elemento
console.log("Informacion Recuperada");
var elemento1 = localStorage.getItem("nombre");
console.log(elemento1);
var elemento2 = localStorage.getItem("usuario 1");
console.log(typeof(elemento2));
// Todo elemento que viene el LocalStorage es un String
var array = elemento2.split(",");
console.log(array);

// Como almacenar objetos JSON
var json1 = {nombre: "johan", edad: 22, pasion: "Dios"};
var json2 = {titulo: "Naruto", año: 2019, pais: "japon"};

// Debemos convertirlos a String para almacenarlos
localStorage.setItem("json1", JSON.stringify(json1));
localStorage.setItem("json2",JSON.stringify(json2));

// Como recuperar un json
var json = localStorage.getItem("json1");

// Debemos convertir el String a JSON
console.log(typeof(JSON.parse(json)));
console.log(JSON.parse(json));

// Como eliminar un elemento
localStorage.removeItem("json2");

// Como eliminar todo
//localStorage.clear();


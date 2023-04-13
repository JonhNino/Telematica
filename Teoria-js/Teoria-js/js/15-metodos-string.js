'use strict'

/**
 * Metodos para manejar datos tipo String
 */

 var numero = 8;
 var texto1 = "Hola soy Johan, de nuevo Johan";
 var texto2 = "Es un gusto conocerte";

 // Metodo para convertir un Number a String
 var dato = numero.toString();
 console.log(dato);

 // Metodo para convertir todo un texto a minusculas
    dato = texto1.toLowerCase();
    console.log(dato);
// Metodo para convertir todo un texto a mayúsculas
    dato = texto2.toUpperCase();
    console.log(dato);
// Metodos para concatenar cadenas
    dato = texto1+" "+texto2;
    console.log(dato);
    dato = texto1.concat(" "+texto2);
    console.log(dato);

// Metodos para hacer Busquedas
console.log("***************** METODOS DE BUSQUEDA ****************");
// 1. Metodo indexOf(): Me entrega la posición de inicio de la primera coincidencia
var index = texto1.indexOf("Johan");
console.log("Metodo IndexOf: "+index);
// 2. Metodo lastIndexOf(): Me entrega la posición de inicio de la última coincidencia
    index = texto1.lastIndexOf("Johan");
    console.log("Metodo lastIndexOf: "+index);
// 3. Metodo search(): Me busca una la primera coincidencia
    index = texto1.search("Johan");
    console.log("Metodo search: "+index);
// 4. Metodo match(): me entrega un arreglo con las coincidencias encontradas
    index = texto1.match("Johan");
    console.log("Metodo match: "+index);
// 5. Metodo includes(): Este indica True si el valor existe o False sino existe
    index = texto1.includes("Johan");
    console.log("Metodo includes: "+index);
// 6. metodo startsWith(): Busca una cadena en el inicio y retorna True o False
    index = texto1.startsWith("Hola soy Johan");
    console.log("Metodo startsWith: "+index);
// 7. Metodo endsWith(): Busca una cadena al final y retorna True o False
    index = texto1.endsWith("de nuevo Johan");
    console.log("Metodo endsWith: "+index);
console.log("******************************************************");
console.log("Metodos de extracción de subcadenas");
console.log("*******************************************************");
 // 1. Metodo Substring(a,b): Resive dos parámetros, el primero es la posición inicial de la subcadena a extraer y el segundo
 // es la posición final más 1
var subcadena = texto1.substring(0,14);
    console.log("Metodo Substring: ", subcadena);
// 2. Metodo substr(a,b): Resive dos parámetros, el primero es la posición inicial, el segundo es el tamaño de la subcadena
    subcadena = texto1.substr(0,14);
    console.log("Metodo substr: ",subcadena);
// 3. Metodo slice(a,b): Se utiliza para recuperar trozos de un texto
    subcadena = texto2.slice(6);
    console.log("Metodo slice: "+subcadena);
console.log("*******************************************************");
console.log("Metodos de reemplazo y división de cadenas")
console.log("*******************************************************");
// 1. Metodo replace
var nuevoTexto = texto1.replace("de nuevo Johan","como estas?");
    console.log("Metodo replace: "+nuevoTexto);
// 2. Metodo split(): Utilizado para particionar un texto utilizando un separador
    nuevoTexto = texto1.split(" ");
    console.log("Metodo split: ");
    console.log(nuevoTexto);
// 3. Metodo trim(): Se utilzia para eliminar lso espacios al inicio y al final de un texto
var cadena = "    Mi nombre es Johan        ";
    nuevoTexto = cadena.trim();
    console.log("Metodo trim: "+nuevoTexto+" sin espacios");
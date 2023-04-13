'use strict'

// Una API-REST, es en esencia un backend que recibe peticiones HTTP para devolver informacion 
// en formato JSON. 
// Fetch es un metodo que sirve para hacer peticiones AJAX a servicios / API-REST
/*
Una promesa es una sección de código que retorna dos tipos de respuesta (resolve,reject)
para indicar que una tarea fue resuelta con exito (resolve), o que ocurrió un error durante
su ejecución (reject). Las promesas suelen utilizarse en estos casos:
    1. Cuando se leen archivos
    2. cuando se hacen peticiones POST
    3. cuando se lee una base de datos
    4. cuando se hacen peticiones AJAX
*/
// Evento de carga completa de la pagina. 
window.addEventListener('load',function(){
    // Peticion AJAX por fetch, el servicio API retorna los datos en forma de objeto, pero deben
    // Formatearse a JSON
    var usuarios = [];
    // URL de la API - REST
    fetch("https://reqres.in/api/users")
        // Esperamos una respuesta de la promesa
        .then(data => data.json()) // convertir a formato JSON
        .then(users => {
            usuarios = users.data; // data es un campo especófico del objeto JSON recibido
            console.log(usuarios);
            usuarios.forEach((elemento,indice) => {
                let li = document.createElement("li");
                li.innerHTML = `${indice}. ${elemento.first_name} `;
                dv_usuarios.append(li);
            });
        })
        // Como capturar errores en las promesas
        // un error en una promesa puede ocurrir, cuando algo anda mal o cuando no tenemos conexcion
        // a internet.
        .catch(error => {
            alert("error con la peticion");
            console.log(error);
        })

        // Como crear promesas
        // Esta es una funcion que me retorna un JSON convertido en String
        function getDatos(){
            var usuario = {
                nombre: "johan",
                apellido: "fernandez",
                edad: 22,
                pasion: "Dios"
            };
            // Declarar Promesa
            return new Promise((resolve,reject)=>{
                var usuario_string = "";
                setTimeout(function(){
                    usuario_string = JSON.stringify(usuario);
                    if(usuario_string == "") return reject("Error al convertir");
                    return resolve(usuario_string);
                },1000);
                // if(usuario_string == "") return reject("Error al convertir");

               // return resolve(usuario_string);
            });
        }
        // Para acceder al resultado de la promesa, se debe utilizar .then()
        getDatos()
            .then(data => {
                console.log(data);
            })
            // Promesa en cascada: "No puedo colocar ninguna funcionalidad entre pronesas en cascada"
            // console.log("Algo"), genera error...
            .then(data => console.log("promesa en cascada")) 
            // Como capturar errores al ejecutar una promesa - metodo catch()
            .catch(error => {
                alert("ocurrion un error con la peticion");
                console.log(error);
            }) 
            
        // Como crear elementos HTML con JS y agregarlos al documento
        var btnNewHTML = document.getElementById("btnNewHTML");
        var dv_usuarios = document.querySelector("#dv_usuarios");
        btnNewHTML.addEventListener('dblclick',function(){
            var btn1 = document.createElement('h3');
            btn1.innerHTML = "Hola";
           
            dv_usuarios.append(btn1);
        });
});
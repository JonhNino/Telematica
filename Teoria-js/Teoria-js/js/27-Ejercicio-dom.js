'use strict'

// Evento Load
window.addEventListener('load',function(){
    // Instancia de elementos del DOM
    var fmrDatos = document.querySelector("#fmrDatos");
     // Instancia de elementos del Formulario
     var txtNombres = document.getElementById("txtNombres");
     var txtApellidos = document.querySelector("#txtApellidos");
     var txtEdad = document.getElementById("txtEdad");
     // Instancia del blog de informacion
     var h4nombre = document.getElementById("Nombres");
     var h4apellidos = document.getElementById("Apellidos");
     var h4edad = document.getElementById("Edad");

    // Evento submit del formulario
    fmrDatos.addEventListener('submit',function(){
        console.log("Evento Submit");
        // Informacion Ingresada por el usuario
        // usamos trim para eliminar los espacios en blanco
        var nombres = (txtNombres.value).trim(); 
        var apellidos = (txtApellidos.value).trim();
        var edad = parseInt(txtEdad.value);
        
        // Validacion de la informacion
        // La funcon isNaN entrega True, cuando el parámetro no es un número
        if(nombres.length == 0 || !isNaN(nombres)){
            alert("El nombre no es valido");
            return false;
            // El return false, garantiza que las siguientes lineas de codigo no se ejecuten
        }
        if(apellidos.length == 0 || !isNaN(apellidos)){
            alert("Los apellidos  no son validos");
            return false;
            // El return false, garantiza que las siguientes lineas de codigo no se ejecuten
        }
        if(edad <=0 || isNaN(edad)){
            alert("La edad no es valida");
            return false;
            // El return false, garantiza que las siguientes lineas de codigo no se ejecuten
        }

        // Si la validacion del formulario fue correcta 
        h4nombre.innerHTML = `Nombres: ${nombres}`;
        h4apellidos.innerHTML = `Apellidos: ${apellidos}`;
        h4edad.innerHTML = `Edad: ${edad}`;

        document.querySelector("#divUsuario").style.display = "block";
    });
}); 
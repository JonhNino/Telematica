'use strict'

/**
 * Try - catch: Se utiliza para validar un trozo de código que es suceptible a errores.
 */
window.addEventListener('load',function(){
    // Ejemplo: En el try, debe ir ese trozo de codigo que se considere suceptible a errores
    // Try significa probar...
    try{
        // Trozo de codigo a probar, porque se considera suceptible a errores
        var year = 2019;
        alert(yea);
    }catch(error){
        // con el metodo catch se captura el error...
        alert("Ocurrio este error... "+error);
        console.log(error);
    }
   
});
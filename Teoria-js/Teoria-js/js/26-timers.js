'use strict'
// Uso del evento Load
window.addEventListener('load',function(){
    // Instancia de elementos del DOM
    var btn1 = document.querySelector("#btn1");
    var btnstart = document.getElementById("btnstart");
    var btnstart1 = document.getElementById("btnstart1");
    var btnstop = document.getElementById("btnstop");
    var btnstop1 = document.getElementById("btnstop1");
    var btnAlert = document.querySelector('#btnAlert');

    // TIMERS
    var time1,time2;
    // Uso de SetInterval: Se utilza para ejecuatar una fraccion de codigo .js cada cierto tiempo
    function Intervalo(namefunction,time){
        // namefunction debe ser una funcion que no dependa de ningun parámetro
        let timer = setInterval(namefunction,time);
        return timer;
    }
    function timer1(){
        console.log("Ejecutando timer 1");
    }
    function timer2(){
        console.log("Ejecutando timer 2");
    }
  
    // Evento Click del boton Start
    btnstart.addEventListener('click',function(){
        time1 = Intervalo(timer1,1000);
    });
    // Evento Click del boton Start1
    btnstart1.addEventListener('click',function(){
        time2 = Intervalo(timer2,3000);
    });
    // Evento Click del boton Stop
    btnstop.addEventListener('click',function(){
        clearInterval(time1); // Esto detendrá el timer 1
    });
     // Evento Click del boton Stop1
     btnstop1.addEventListener('click',function(){
        clearInterval(time2); // Esto detendrá el timer     2
     });


    // Uso de SetTimeout: Se utliza para ejecutar despes de cierto tiempo un fraccion de codigo
    function ExecuteTimeOut(namefunction,timeout){
        
        setTimeout(namefunction,timeout);
        return;
    }

    // Funcion Alert
    function alerta(){
        alert("SetTimeOut Ok!!!");
    }
    // Generar un alerta despues de t segundos haciendo doble click
    btnAlert.addEventListener('dblclick',function(){
        ExecuteTimeOut(alerta,3000);
    });


});
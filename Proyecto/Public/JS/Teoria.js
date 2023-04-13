//Tipos de Variables
const data =3;
var a =7; // no es necesario indicar el tipo de del dato a almacenar, el software lo reconoce automaticamente
var b=0.0;
var cad= "Hola, ";
var flag =false;
var Mi_Array =[1,2,3,4];
var Mi_Array2 = [1,"2", false,2.5];
var Mi_Json = {Nombre: "Jonh", Edad: 28, Apellido: "Niño"}
Mi_Json.Nombre="Juan";
Mi_Json.Profesion="ING."
var Array_Json=[{Nombre: "Andres", Edad: 28},{Nombre: "Andrea", Edad: 28}]

b =a*10.5;

cad = cad+"Como estas?"

console.log("a: "+a);// Imprimir por consola
console.log(`a: ${a}`); 
console.log("cad:"+cad);
console.log("flag:"+flag);
console.log("Mi_Json:"+ JSON.stringify(Mi_Json));
console.log("Array_Json:"+ JSON.stringify(Array_Json));


///FUNCIONES
Mi_Funcion("Jonh");
var Resultado = getData(2,7);
console.log("Resultado"+Resultado);
console.log("Tipo dato"+typeof(Resultado));///PAra saaber que tipo de dato retorna N Funcion

function Mi_Funcion(Nombre){
    let apellido ="Niño";
    console.log("Nombre"+Nombre);
    console.log("Apellido"+apellido);
};

function getData(a,b){
    let c=a+b;
    let cad ="jaldfjla";
    return
};

//Condicionales
// IF and Else
var edad=16;
if (edad>= 18){
    console.log("Eres Mayor de edad");
}else if (edad>=60){
    console.log("Eres mayor de 60 años");
}else{
    console.log("Eres Menor de edad");
}

//switch case
var a =5;
switch(a){
    case 1:
        console.log("Igual a 1");
    break;
    case 2:
        console.log("Igual a 2");
    break;
    default:
        console.log("No es un numero");
    break;
}

//Condicionales
//While 
var i =0;
    while (i<5){
        console.log("Num"+i);
        if(i==3){
            break;
        }
        i++;
    }

// Do WHile Haga tal mientras pase tal cosa
i=1;
do{
    console.log("Num:"+i);
    i++
}while(i<8);

//For Sirver para recorre arreglos
var Array = [1, "2", true,2.5];
for (var i=0; i<Array.legth; i++){
    console.log(Array[i]);
}

//For each exlusivo para recorrer arreglos
Array.forEach((d,i) => {//El orden de los parametros es datos, indice y de ultima el tamaño del arreglo
    console.log(i+":"+d);
});

//Configuracion de timer
var my_timer = setInterval(Imprimir,1000) /// Puedo pedirle que me ejecute cierta funcion cada x tiempo
/// Cuando se ejecuta este timmer no es necesario agregar los () para la funcion a usar

var my_timer2 =setInterval(()=>{
    console.log("Como estas?")
},2000);


function Imprimir(){
    console.log("Hola ");
}

setTimeout(() => {
    console.log("Hi");    
}, 5000);
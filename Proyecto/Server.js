//Front-End and Back-End son las mas importantes
//Front-End se encarga todo lo que el usuario puede ver por consola, botones contenido 
//Back-End es el servidor es lo que se ejecuta , base de datos 
// Peticiones http Get, delete, Put...
//Request requerimiento
//Repond Respuesta
//Navegadro es la interfaz donde se comunica el usuario con el servidor

const express = require('express');
const http = require('http');
const app = express();
const port = 5000//Es como el camino por el cual vamos a transistar o medio de comunicacion
const server = http.createServer(app);// http es el protocolo
const path=require('path');

app.get('/',(req, res)=> {/// Esta es la ruta INicial
    res.write("Hola soy el Servidor");
    res.end();
});

app.get('/Hola',(req, res)=> {
    res.write("Muy buen dia :)");
    res.end();
});

app.use(express.static("public"));

app.get('/Login',(req, res)=> {
    res.sendFile(path.resolve(__dirname,'./Public/Html/Login.html'));
});

console.log("Rutar baase:"-__dirname);//Para saber cual es la ruta base

server.listen(port,()=>{
    console.log("Servidor escuchado");
});
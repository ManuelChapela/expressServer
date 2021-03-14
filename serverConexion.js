
  
  /* 
PASOS A SEGUIR PARA INSTALAR EXPRESS

1) Seleccionar carpeta en Camel
2) npm init -y
3) npm i express
*/

// 4) Instalar dependecias
const express = require('express');
const bodyParser = require('body-parser');
const firebase = require("firebase/app"); // Esta const se hace para vincular con FIREBASE

// 5) Configuración inicial ≠ host y port
const server = express(); // El local host se está sobreentendiendo
const listenPort = 8080;

// 6) Carpeta con mis ficheros de front (creo la carpeta public y meto ahí todo lo que quiera desplegar desde el local Server)
const staticFilesPath = express.static(__dirname + '/public'); // Esto significa que estará en el directorio, y dentro de ahí en una carpeta llamada public
server.use(staticFilesPath);

// 7) Como no solo va a servir estáticos (como anteriormente). Se saca la documentacion de //express.com 
server.use(bodyParser.urlencoded({ extended : true })) // ASK --------> POR QUÉ TRUE O FALSE
server.use(bodyParser.json()) // Nos parsea el json siempre que sea necesario

// 8) API REST
/* ESTO QUE ESTÁ COMENTADO EN BLOQUE SERÍAN LOS PASOS PREVIOS PARA ENTENDER EL MÉTODO GET Y EL MÉTODO POST (GET = hacer lecturas para que front lea cosas que back envía / POST = escribir directamente en back lo que se escribe en front)
server.get('/sendInfo', (req, res) => {
   console.log(req.body); // ---> {} Objeto vacio porque las peticiones get no tienen contenido. Cambia el http inicial añadiendo elementos.
    res.send("OKAY");  // Nos sacará por el http (como si fuese un parámetro de búsqueda) la información que escribamos a la hora de desplegar el server.
}); 

server.post('sendInfo', (req, res) => {
    console.log(req.body); // ---> Nos sacará por terminal toda la información que el usuario envíe por el formulario
    res.send("OKAY"); // Nos imprimirá por pantalla un OKEY
}); 

// Si queremos ponerle por pantalla el nombre y el mail introducido por formulario
server.post('sendInfo', (req, res) => {
    let miBaseDeDatos = req.body; // ---> De esta forma podremos hacer que la información información.parámetroDelInputDelFormulario(name por ejemplo)
    res.send("OKAY " + miBaseDeDatos.nameDelInputNAME + " tu correo es " + miBaseDeDatos.nameDelInputEMAIL); // OKAY MANUEL TU CORREO ES MANUEL@DEV.GAL
}); 
*/

// Si queremos enviarle por pantalla una información concreta, tendremos que linkearla o en este caso crearla a través del código y enviarsela mediante string porque el bodyParse parsea la información.
// Creamos un objeto [ESTARÁ en firebase, mongo o una base de datos cualquiera, no es una práctica habitual esta]

const infoGeneral = [{
    
    name: "Manuel",
    email: "hola@lolainas.com",
    contraseña: "adminManuel",
},
{
    name: "Roberto",
    email: "roberto@roberto.com",
    contraseña: "adminRobert",
}];

server.get('/sendInfo', (req, res) => {
    console.log(req.body); // ---> {} Objeto vacio porque las peticiones get no tienen contenido. Cambia el http inicial añadiendo elementos.
     res.send(JSON.stringify(infoGeneral));  // Nos sacará por el http (como si fuese un parámetro de búsqueda) la información que escribamos a la hora de desplegar el server. Tiene que ser String porque http solo trabaja con hipertext. 
     // ASK -----> Por qué stringify?
 }); 

 
 server.post('/sendInfo', (req, res) => {
    let miBaseDeDatos = req.body; 
    infoGeneral.push({ name: miBaseDeDatos.infoName }, { email: miBaseDeDatos.infoEmail }, { contraseña: miBaseDeDatos.infoSerial });
    // console.log(miBaseDeDatos);
    // console.log(infoGeneral);
    res.send("Mensaje enviado con éxito. ¡Mis felisitasiones!"); 
}); 

// Arrancarlo
server.listen(listenPort, // listenPort es el puerto, podría ser 5500 o desde el que queramos arancarlo, en este caso es el puerto 8080 que desde la const listenPort definimos al princpio
  () => console.log(`Server started listening on ${listenPort}`))


/*
CRUD = Create Read Update Delete

            http    
----------------------
Create      POST
Read        GET 
Update      PUT
Delete      DELETE
*/

/* 
Para arrancar a guardar la información en un servidor de Firebase hay que:
1) terminal ----> npm install --save firebase ////// se intala en el package.json
2) hacer una constante en este documnto que sea const firebase = require("firebase/app");
3) Create new realtimeDatabase en firebase.com
4) Add Firebase to your web application

*/

/*
// FIREBASE [para guardar en base de datos todos los datos introducidos en el formulario de HTML]
const firebaseConfig = {
    apiKey: "AIzaSyB1jPC-qc7f1nkSslmR4kzxhvWaMhp0DNg",
    authDomain: "conection-back-to-front.firebaseapp.com",
    databaseURL: "https://conection-back-to-front-default-rtdb.firebaseio.com",
    projectId: "conection-back-to-front",
    storageBucket: "conection-back-to-front.appspot.com",
    messagingSenderId: "969451962941",
    appId: "1:969451962941:web:d7a21353f51f0c38326054"
  };

// Initializar FIREBASE 
firebase.initializeApp(firebaseConfig);

let database = firebase.database();



server.post('/sendInfo', (req, res) => {
    let miBaseDeDatos = req.body; 
    infoGeneral.push({ name: miBaseDeDatos.infoName }, { email: miBaseDeDatos.infoEmail }, { contraseña: miBaseDeDatos.infoSerial });
    // console.log(miBaseDeDatos);
    // console.log(infoGeneral);
    res.send("Mensaje enviado con éxito. ¡Mis felisitasiones!"); 
}); 



database.ref('inputs/').update(infoGeneral)
*/
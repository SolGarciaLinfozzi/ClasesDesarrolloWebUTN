//1. Exportamos las dependencias que necesitamos
const express = require('express');

//2. Creo una variable para ejecutar las funciones de express
const app = express();

//3. Creo el puerto para recibir las peticiones o escuchar al cliente
const PORT = 3001;

//Middelware - CLASE 17 - debe estar aca arriba

app.use(express.json()); // la app sabe leer json
app.use(express.urlencoded({ extended: true })); // si los archivos vienen codificados, decodificalos

// Conectamos a la Base de Datos

const mysql = require('mysql2');

const conexion = mysql.createConnection({
    host: 'localhost',
    port: 3308,
    user: 'root',
    password: 'Sol44143194'
})

conexion.connect((error)=>{
    if(error){
        console.log(`El error es: ${error}`);
    }else{
        console.log(`Conectado a la Base de Datos`);
    }
})

//4. Llamo a la función que activa el servidor y lo tiene listo para peticiones
app.listen(PORT, () => {
    console.log(`Servidor trabajando en el Puerto ${PORT}`);
    console.log('Servidor trabajando en el Puerto ' + PORT);
    console.log('Servidor trabajando en el Puerto ', PORT);
});

//5. Creo las respuestas al cliente
app.get('/', (req, res) => {
    console.log(req.url);
    console.log(req.method);
    res.send('<h1> Bienvenidos a mi App </h1>') 
}); //select sql


// 6. Respuestas HTTP del servidor

/*
app.post(); //insert sql
app.update(); //update sql
app.delete(); //delete sql
*/

//6 Más respuestas al cliente mediante el BROWSER
app.get('/home', (req, res) => {
    //console.log(req);
    console.log(req.url);  // req es el requerimiento y le pido data que me interesa para que se muestre por consola
    console.log(req.method);
    res.send('Hiciste click en home');    
});

app.get('/datos', (req, res) =>{
    res.json({ 
        usuario: 'Solcito',
        dni: 123456789,
        belleza: 'positivo'
    })
})


app.get('/index', (req, res) => {
    res.sendFile('index.html' , {
        root: __dirname + '/public' // le paso dónde esta, la ruta
    })  
})

app.get('/productos', (req, res) => {
    res.sendFile('productos.html' , {
        root: __dirname + '/public' // le paso dónde esta, la ruta
    })  
})

let contador = 0
app.get('/contador', (req,res) =>{
    contador++
    console.log(contador)
    res.send(`La cantidad de visitas a esta API es: ${contador}`)
})

//CLASE 17


//Recibo datos con el método post -- el BROWSER no te muestra los post

app.post('/recibir', (req, res) =>{
    //let nombre = req.body.nombre;
    console.log(req.body);
    res.send('Sus datos fueron recibidos')
    //res.send('Estamos felices de que te contactes con nosotros') - SOLO PUEDO ENVIAR UN SOLO SEND
});

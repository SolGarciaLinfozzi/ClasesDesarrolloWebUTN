//1. Importamos la dependencia de Express/ librería que necesitemos
const express = require('express');  //importa el modulo de express en la constante
const mysql = require('mysql2');

//2. Ejecuto las funciones de Express en la variable
const app = express();

//3. Establezco un puerto para la escucha de mi servidor
const PORT = 3000;

//4. Llamo a la función que activa el servidor y lo tiene listo para peticiones
app.listen(PORT, () =>{
    console.log(`Servidor trabajando en el puerto ${PORT}`);
})

//5. Respuesta al cliente
app.get('/', (req, res) => {
    res.send(`<h1> Bienvenido a la App de la UTN </h1>`)
});

//6. Conectamos a la Base de Datos
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


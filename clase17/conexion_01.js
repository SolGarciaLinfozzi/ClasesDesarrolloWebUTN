//Código para crear una Base de Datos (ojo, una sóla vez)

const mysql = require('mysql2');

const con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Sol44143194',
    port: 3308
});

con.connect(function(err){  //conexión a la base de datos
    if (err){
        console.log(`El error es: ${err}`)
    }else{
        console.log(`Conectado a la Base de Datos`);
        con.query("create database probandosql", function(err){ // ejecutar una query
            if (err) throw err;
            console.log(`Base de Datos Creada`);
        })
    }
});
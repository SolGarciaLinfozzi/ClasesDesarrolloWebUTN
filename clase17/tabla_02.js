//Cógigo para crear una tabla (ojo: una sola vez)

const mysql = require('mysql2');

const con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Sol44143194',
    port: 3308,
    database: 'probandosql' // le digo la base de datos que quiero usar
});

con.connect(function(err){
    if (err){
        console.log(`El error es: ${err}`)
    }else{
        console.log(`Conectado a la Base de Datos`);
        let sql = "create table clientes(nombrecliente VARCHAR(100), direccionCliente VARCHAR(100))";
        con.query(sql, function(err){
            if (err) throw err;
                console.log(`Tabla Clientes Creada`);
        })
    }
});
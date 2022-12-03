//Código para insertar datos en la DataBase - Se puede varias veces
const mysql = require('mysql2');

const con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Sol44143194',
    port: 3308,
    database: 'probandosql' //use probandosql
});

con.connect(function(err){
    if (err){
        console.log(`El error es: ${err}`)
    }else{
        console.log(`Conectado a la Base de Datos`);
        let sql = "insert into clientes (nombreCliente, direccionCliente) values ('Sol', 'Av. San Martín 100')";
        con.query(sql, function(err){
            if (err) throw err;
                console.log(`1 Registro insertado`);
        })
    }
});
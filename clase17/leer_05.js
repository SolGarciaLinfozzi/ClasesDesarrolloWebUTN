//Código para leer datos desde la database - Select
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
        let sql = "select * from clientes";
        con.query(sql, function(err, result){
            if (err) throw err;
                console.log(result);
        })
    }
});
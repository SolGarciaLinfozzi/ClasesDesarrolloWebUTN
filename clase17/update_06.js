//Código para actualizar datos desde la database - Update
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
        //variable uno
        let sqlUno = "update clientes set direccionCliente = 'Belgrano 100' where direccionCliente like '%San Martín%'"; //LIKE

        //variable dos
        let sqlDos = "update clientes set direccionCliente = 'San Martín 456' where nombreCliente = 'Sol'";

        con.query(sqlUno, function(err, result){
            if (err) throw err;
                console.log('Datos actualizados: ' + result.affectedRows);
        })
    }
});
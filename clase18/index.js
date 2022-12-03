//CONTROLADOR
//debemos comentar todos los console log para el deploy

const express = require('express') 
const app = express()
const mysql = require('mysql2') 
const hbs = require('hbs') // motor de plantilla
const path = require('path') // encontrar archivo - enrrutador
const nodemailer= require('nodemailer') // envíar mails
require('dotenv').config()  // variables de entorno

//configuramos el puerto
const PORT = process.env.PORT || 9000// npm run dev (en consola)

//middelware
app.use(express.json()) // la app sabe leer json
app.use(express.urlencoded({ extended: true })) // si los archivos vienen codificados, decodificalos
app.use(express.static(path.join(__dirname,'public'))) // busca los archivos estáticos en esa ruta

//configuramos el motor de plantillas de hbs
app.set('view engine','hbs') 
//configuramos la ubicación de las plantillas
app.set('views',path.join(__dirname,'views'))
//configuramos los parcials de los motores de plantillas
hbs.registerPartials(path.join(__dirname,'views/partials'))

//MODELO
//conexión a la base de datos

const conexion = mysql.createConnection({
    host: process.env.HOST,
    port: process.env.DBPORT,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database:process.env.DATABASE
})

conexion.connect((error)=>{
    if(error){
        console.log(`El error es: ${error}`);
    }else{
        console.log(`Conectado a la Base de Datos ${process.env.DATABASE}`);
    }
})

//Rutas de las peticiones
app.get('/', (req, res) => {
    res.render('index', {
        titulo: 'Index'     //le pasamos datos a hbs
    }) //enviame la pag de hbs del archivo: layout
})

//Rutas de las peticiones
app.get('/formulario', (req, res) => {
    res.render('formulario' , {
        titulo: 'formulario'
    }) 
})

//Rutas de las peticiones
app.get('/productos', (req, res) => {

    let sql = "select * from producto";            //LEO DATOS DE LA TABLA PRODUCTOS
        conexion.query(sql, function(err, result){
            if (err) throw err;
                res.render('productos',{
                    titulo: 'productos',
                    datos: result    //le paso los datos de la tabla
                }) 
        })

})



app.get('/contacto', (req, res) => {
    res.render('contacto', {
        titulo: 'contacto'
    }) 
})

app.post('/formulario', (req, res) => { //método post a formulario
    const nombre = req.body.nombre
    const precio = req.body.precio
    const descripcion = req.body.descripcion

    let datos = {
        nombre: nombre,
        precio: precio,
        descripcion: descripcion
    }

    let sql = "INSERT INTO producto SET ?" 
        conexion.query(sql,datos, function(err){ //(datos)
            if (err) throw err;
                console.log(`Producto registrado`)
                res.render('enviado') //mandalo a formulario
        })
}) 

app.post('/contacto', (req, res) => { 
    const nombre = req.body.nombre
    const email = req.body.email

    //creamos una funcion para enviar Email al cliente
    async function enviarMail() {
        //Configuramos la cuenta del envío
        let transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
            user: process.env.EMAIL,
            pass: process.env.EMAILPASSWORD
            },
        tls: {rejectUnauthorized: false} // agrego para solucionar errores
        });
        
        //Envío del mail
        let info = await transporter.sendMail({
            from: process.env.EMAIL,
            to: `${email}`,
            subject: "Gracias por suscribirte a nuestra App",
            html:`Muchas gracias por visitar nuestra página <br> Recibirás nuestras promociones a esta dirrección de correo. <br>Buen fin de semana!!`
            })
    }


    let datos = {
        nombre: nombre,
        email: email
    }

    let sql = "INSERT INTO contacto SET ?" 
        conexion.query(sql,datos, function(err){ //(datos)
            if (err) throw err;
            console.log(`1 contacto registrado`)
            enviarMail().catch(console.error)
        })

        res.render('contacto')
    
}) 

//servidor a la escucha de las peticiones
app.listen(PORT,() =>{
    console.log(`Servidor trabajando en el puerto ${PORT}`);
})


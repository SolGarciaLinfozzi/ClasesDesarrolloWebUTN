//package.json --> configuración del programa ---> (en consola) npm init -y

//CÓDIGO PARA BACKEND

//Creamos las constantes del backend
const http = require('http') // require('http') --> JS le pide a node el módulo 'http' para utilizarlo
const PORT = 3000
const host = '127.0.0.1'


//Creo el servidor, es la app que me responde a través del frontend
const server = http.createServer(function(req,res) {  
    res.status = 200
    res.end('Hola mundo, soy el Backend')
})

//'cuando escuche que me avise'
server.listen(PORT,host, () => {
    console.log('Back trabajando en la aplicación')
})

//nodemon index.js  -- ctrl + c para cortar ejecución



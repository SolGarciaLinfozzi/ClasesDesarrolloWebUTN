console.log("Hola Mundo")

//Variables

var nombre
let edad = 20
const DNI = 44143194 // constantes en MAYÚSCULA

console.log("-----------------------")
// --------------------

nombre = "Sol"

//concatenar datos
console.log("Mi nombre es " + nombre + " tengo " + edad + " años y mi DNI es " + DNI)
console.log(`Mi nombre es ` + nombre + ` tengo ` + edad + ` años y mi DNI es ` + DNI)

nombre = "Sol2"

//template string
console.log(`Mi nuevo nombre es ${nombre} y mi DNI sigue siendo ${DNI}.` )

console.log("-----------------------")
// --------------------

//Arrays

const verdadero = true

let frutas = ["manzana", 5778 , verdadero]

console.log("Los datos del arreglo frutas son: " + frutas)
console.log(frutas)

console.log("El contenido de la posicion 1 del array frutas es: " + frutas[1])
console.log(`El contenido de la posicion 0 del array frutas es: ${frutas[0]}`)

frutas.push("choclo") // introducir datos al array

console.log(`La cantidad de elementos del array frutas es: ${frutas.length}`)


console.log("-----------------------")
// --------------------

//Objetos - JSON

let pais = {
    nombrePais: "Argentina",
    cantidadProvincias: 24,
    continente: "América del Sur"
}

console.log( pais)

console.log(`El nombre del país del objeto es: ${pais.nombrePais}`)

console.log("-----------------------")
// --------------------



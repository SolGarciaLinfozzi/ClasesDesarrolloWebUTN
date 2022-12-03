//Declaramos las variables
let suma;
let resta, multiplicacion, division;

let resultado = document.getElementById("resultado");//le doy el manejo del DOM a js

console.log(resultado);

let numero1,numero2;

//FUNCIONES

//invoco a la funcion
//iniciar();

function saludar() {
    resultado.innerHTML= "Hola usuario, un placer!!"; // cambio 
}

function iniciar() {

    /* 
    numero1 =  parseInt(prompt('Ingrese un número: '));
    numero2 = parseInt(prompt('Ingrese otro número: ')); 
    */

    //Variables locales: sólo están en esta función
    let datoUno= prompt("Ingrese un número: ");
    let datoDos = prompt('Ingrese otro número: ');

    numero1 = parseFloat(datoUno);
    numero2 = parseFloat(datoDos);

     console.log(numero1,numero2);
}

function validar() {
    if (numero1 == NaN && numero2 == NaN) {
        alert('Es necesario llenar el dato')
    } 
} 



function sumar() {
    //Validación con un if
    if(numero1== undefined && numeroDos === undefined){
        alert('Es necesario llenar el dato, click en Iniciar Cálculos')
    }
    suma = numero1 + numero2;

    resultado.innerHTML= `El resultado de la suma es: ${suma}`;
    console.log("El resultado de la suma es " + suma);
}

function restar() {
    validar();
    resta = numero1 - numero2;
    resultado.innerHTML= `El resultado de la resta es: ${resta}`;
    console.log("El resultado de la resta es " + resta);
}

function multiplicar() {
    validar();
    multiplicacion = numero1 * numero2;
    resultado.innerHTML= `El resultado de la multiplicacion es: ${multiplicacion}`;
}

function dividir() {
    validar();
    division = numero1 / numero2;
    resultado.innerHTML= `El resultado de la division es: ${division}`;
}
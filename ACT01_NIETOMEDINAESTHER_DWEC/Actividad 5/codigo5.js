var valores = [true, 5, false, "hola", "adios", 2];
let palabraMayor; //almacén de la palabra más larga
var cadenas = [] //Array que almacenará solo cadenas

valores.forEach((elemento) => { //Recorre el array valores y añade al array cadenas solo los elementos cuyo tipo sea un string
    if (typeof(elemento) === "string") {
        cadenas.push(elemento)
    }
})

cadenas.forEach((elemento) => { //este array recorre el array cadenas (solo hay strings así que podemos trabajar libremente con él) y guarda la palabra más larga comparando lenght
    if (palabraMayor) { //si "palabraMayor" tiene un valor asignado: por eso la primera vuelta entra en el else y se le asigna.
        if (elemento.length > palabraMayor.length) {
            palabraMayor = elemento;
        }
    } else {
        palabraMayor = elemento;
    }
});

console.log(palabraMayor); 

// -------------------------------------------------------------------------------------------------------------------------

var booleanos = []; //array que almacena los booleanos al recorrer el array de valores

valores.forEach((elemento) => { 
    if (typeof(elemento) === "boolean") {
        booleanos.push(elemento)
    }
})

// Ahora voy a operar con diferentes combinaciones usando || y && para conseguir resultados false y true
// booleanos[0] = true
// booleanos[1] = false

const combinacion1 = booleanos[0] || booleanos[1]; //true
console.log(combinacion1);
const combinacion2 = booleanos[0] && booleanos[1]; //false
console.log(combinacion2);

/* 
OTRAS OPERACIONES QUE DAN TRUE Y FALSE: (el ejercicio solo pide 1 de cada, por eso estas las dejo comentadas a forma de apuntes para mí misma)

const combinacion3 = booleanos[0] || booleanos[0]; //true
console.log(combinacion3);
const combinacion4 = booleanos[0] && booleanos[0]; //true
console.log(combinacion4);
const combinacion5 = booleanos[1] || booleanos[1]; //false
console.log(combinacion5);
const combinacion6 = booleanos[1] && booleanos[1]; //false
console.log(combinacion6);
*/

// -------------------------------------------------------------------------------------------------------------------------

var numeros = [];

valores.forEach((elemento) => { 
    if (typeof(elemento) === "number") {
        numeros.push(elemento)
    }
})

const suma = numeros[0] + numeros[1];
console.log(suma);
const resta = numeros[0] - numeros[1];
console.log(resta);
const multiplicacion = numeros[0] * numeros[1];
console.log(multiplicacion);
const division = numeros[0] / numeros[1];
console.log(division);
const resto = numeros[0] % numeros[1];
console.log(resto);







/*
Escribe un script que pida al usuario el valor del radio de una circunferencia y muestre por pantalla (no en la consola):
El valor del radio.
El valor del diámetro.
El valor del perímetro de la circunferencia.
El valor del área del círculo.
El valor del área de la esfera.
El valor del volumen de la esfera.

Notas:
El valor de Pi debes obtenerlo del objeto Math, no introducirlo manualmente.
Debes escribir las unidades correspondientes a cada valor:  cm,  cm2, o cm3.
Los datos deben tener 2 decimales
Como datos de muestra, si metes 5, deberías obtener aproximadamente los siguientes valores (sin incluir las unidades) : 
5 ,00
10,00
31,41
78,54
314,15
523,59

*/

let n = prompt("Introduce el radio de la circunferencia: ")

const mapaOperaciones = new Map(); 

mapaOperaciones.set("radio", n)
mapaOperaciones.set("diametro", n * 2)
mapaOperaciones.set("perimetro", 2 * Math.PI * n)
mapaOperaciones.set("areaCirculo", Math.PI * Math.pow(n, 2))
mapaOperaciones.set("areaEsfera", 4 * Math.PI * Math.pow(n, 2))
mapaOperaciones.set("volumenEsfera", (4/3) * Math.PI * Math.pow(n, 3))

let contador = 0

mapaOperaciones.forEach((valor, clave) => {
    let numero = parseFloat(valor)
    let redondeado = numero.toFixed(2)
    if (clave === "radio") {
        alert(`${clave} - ${redondeado} cm`)
    } else if (clave === "diametro") {
        alert(`${clave} - ${redondeado} cm`)
    } else if (clave === "perimetro") {
        alert(`${clave} - ${redondeado} cm2`)
    } else if (clave === "areaCirculo") {
        alert(`${clave} - ${redondeado} cm2`)
    } else if (clave === "areaEsfera") {
        alert(`${clave} - ${redondeado} cm2`)
    } else {
        alert(`${clave} - ${redondeado} cm3`)
    }

})






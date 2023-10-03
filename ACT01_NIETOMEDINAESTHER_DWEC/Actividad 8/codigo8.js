var cadena = "la ruta nos aporto otro paso natural";
var cadenaSinEsp = cadena.split(' ').join(''); //hace el split en los espacios y los une sin espacios con el join
let cadenaInversa = "";

for (let i = cadenaSinEsp.length - 1; i >= 0; i--) { //Recorre del revés la cadena principal y la almacena en cadenaInversa
    cadenaInversa += cadenaSinEsp[i]
}

if (cadenaSinEsp === cadenaInversa) {
    console.log("La cadena introducida SÍ es palíndroma")
} else {
    console.log("La cadena introducida NO es palíndroma")
}


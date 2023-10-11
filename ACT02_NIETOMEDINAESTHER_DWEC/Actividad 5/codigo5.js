
let listaRecetas = [
    {titulo: "Pollo con patatas", explicacion: "Cortar las patatas, freirlas y echarles sal. Por otro lado cortamos el pollo en filetes, especiamos y freimos en una sartén"},
    {titulo: "Macarrones con tomate", explicacion: "Hervir la pasta. Sofreir el tomate con cebolla y ajo. Echar la pasta junto con el tomate y mezclar bien, echar sal si es necesario."},
    {titulo: "Ensalada", explicacion: "Cortamos la lechuga al tamaño deseado. Mezclamos en un bol con maíz, atún, cebolla y huevo duro. Por último echamos sal, vinagre y aceite al gusto."},
    {titulo: "Macedonia", explicacion: "Cortamos a taquitos la variedad de fruta que más nos guste y servimos bien fresca en un bol"}
]

function recetas() {

    
    const lista = document.getElementById("recetas")
    lista.innerHTML = " "
    
    listaRecetas.forEach(element => {
        
        let li = document.createElement("li");
        li.textContent = `${element.titulo}: ${element.explicacion}`;
        lista.appendChild(li);
        
    });

    
}

recetas()
    

function eliminarReceta() {
    let entrada = document.getElementById("id").value
    let entradaParseada = Math.round(parseInt(entrada))
    if (entradaParseada < 1 || entradaParseada > 4) {
        alert("Error, rango no válido establecido")
    } else {
        listaRecetas.splice(entradaParseada - 1, 1)
        recetas()
    }
    console.log(entradaParseada);
    
}




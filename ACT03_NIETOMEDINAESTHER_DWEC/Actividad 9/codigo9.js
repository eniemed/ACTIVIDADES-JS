function calcular() {
    let contenedor = document.getElementById("resultado")
    let input = document.getElementById("texto").value
    
    let solucion = eval(input)

    let parrafo = document.createElement("p")

    parrafo.textContent = solucion

    contenedor.appendChild(parrafo)

}
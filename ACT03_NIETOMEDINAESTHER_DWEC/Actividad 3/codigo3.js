let matriz = [[5, 4, 6, 3, 1, 6], [2, 9, 3], [], [8, 1, 7, 10]]

let contenedor = document.getElementById("resultado")
let parrafo = document.createElement("p")

let resultadoArray = []

matriz.forEach((elemento) => {
    elemento.forEach((subelemento) => {
        resultadoArray.push(subelemento)
    })
})

parrafo.textContent = `Resultado: ${resultadoArray}`

contenedor.appendChild(parrafo)


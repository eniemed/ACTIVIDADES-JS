let equipos = [
    {nombre: "Barcelona",
    puntos: 20},

    {nombre: "Real Madrid",
    puntos: 19},

    {nombre: "Atlético de Madrid",
    puntos: 16}

]

function mostrarTabla() {
    
    let contenedor = document.getElementById("tablaContenedor")
    let tabla = document.createElement("table")
    let tbody = document.createElement("tbody")

    for (let i = 0; i < 3; i ++) {
        let fila = document.createElement("tr")
        for (let j = 0; i < 3; i++) {
            let celda = document.createElement("td")
            celda.textContent = "kasmdka"
            
        }
        tbody.appendChild(fila)
    }
    tabla.appendChild(tbody)
    contenedor.appendChild(tabla)
    tabla.setAttribute("border", 2)
}



mostrarTabla()


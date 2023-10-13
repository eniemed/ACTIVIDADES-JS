
let mapaResultados = new Map()


for (let i = 0; i < 36000; i++) {

    let dado1 = Math.ceil(Math.random() * 6)
    let dado2 = Math.ceil(Math.random() * 6)

    let sumaDados = dado1 + dado2

    if (mapaResultados.has(sumaDados)) {
        mapaResultados.set(sumaDados, mapaResultados.get(sumaDados) + 1)
    } else {
        mapaResultados.set(sumaDados, 1)
    }
    
}

let mostrarDados = document.getElementById("dados")
mostrarDados.innerHTML = " "

mapaResultados.forEach((valor, clave) => {
    let li = document.createElement("li")
    li.textContent = `${clave} -> ${valor}`
    mostrarDados.appendChild(li)
})








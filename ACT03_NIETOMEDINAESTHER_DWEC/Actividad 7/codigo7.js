class cifrado {
    constructor(clave) {
        this.clave = clave
    }

    codificar(texto) {

        let abecedario = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ"

        let solucion = " "

        for (let i = 0; i < texto.length; i++) {
            const cadena = texto[i].toUpperCase()
            const charCode = cadena.charCodeAt(0)

            if (charCode >= 65 && charCode <= 90) {
                const posicion1 = charCode - 65
                const posicion2 = (posicion1 + this.clave) % 27
                const charCode2 = abecedario[posicion2]
                solucion += charCode2
            } else {
                solucion += cadena
            }

        }

        return solucion
        
    }


}

function codificarAutom() {
    let clave = 6
    let objeto = new cifrado(clave)
    let contenedor = document.getElementById("resultado")
    let input = document.getElementById("texto").value
    let parrafo = document.createElement("p")
    let textoCifrado = objeto.codificar(input)

    parrafo.textContent = textoCifrado
    contenedor.appendChild(parrafo)
}



/*
<div class="contenedor-cards">
                    <div class="card">
                        <img src="img/hacer1.jpg">
                        <div class="info">
                            <p class="categoria concierto">concierto</p>
                            <p class="titulo">Música electrónica 2021</p>
                            <p class="precio">$1,200 por persona</p>
                        </div>
                    </div> <!--.card-->
*/

const parrafo = document.createElement("p")
parrafo.textContent = "Categoría de prueba"
parrafo.classList.add("categoria", "paseo")

const parrafo2 = document.createElement("p")
parrafo2.textContent = "Contenido de prueba"
parrafo2.classList.add("titulo")

const parrafo3 = document.createElement("p")
parrafo3.textContent = "precio de prueba"
parrafo3.classList.add("precio")

const contenedorHijo = document.createElement("div")
contenedorHijo.classList.add("info")
contenedorHijo.appendChild(parrafo)
contenedorHijo.appendChild(parrafo2)
contenedorHijo.appendChild(parrafo3)

const imagen = document.createElement("img")
console.log(imagen);
imagen.src = "img/arriba.jpg"

const contenedorPadre = document.createElement("div")
contenedorPadre.classList.add("card")
contenedorPadre.appendChild(imagen)
contenedorPadre.appendChild(contenedorHijo)


const contenedorTotal = document.querySelector(".contenedor-cards")
contenedorTotal.appendChild(contenedorPadre)

contenedorTotal.insertBefore(contenedorPadre, contenedorTotal.children[0])


btnFlotante = document.querySelector(".btn-flotante")

const footer2 = document.querySelector(".footer")

btnFlotante.addEventListener("click", mostrarOcultarFooter)
    

function mostrarOcultarFooter() {
    if (footer2.classList.contains("activo")) {
        footer2.classList.remove("activo")
        btnFlotante.classList.remove("activo")
        btnFlotante.textContent = "Abrir"
    } else {
        footer2.classList.add("activo")
        btnFlotante.classList.add("activo")
        btnFlotante.textContent = "Cerrar"
    }
    
}











class Persona {
    constructor(nombre, edad, genero) {

        this.nombre = nombre
        this.edad = edad
        this.genero = genero
    }

    getInfo() {
        return `Nombre: ${this.nombre} - Edad: ${this.edad} - identidad de género: ${this.genero}`
    }
    
}

let nuevaPersona = new Persona("Esther", 22, "mujer")

class Estudiante extends Persona {
    constructor(nombre, edad, genero, curso, grupo) {

        super (nombre, edad, genero)

        this.curso = curso
        this.grupo = grupo
    }

    matriculado() {
        return `El alumno/a ${this.nombre} ha sido matriculado/a en el curso ${this.curso} grupo ${this.grupo}`
    }

}

let nuevoEstudiante = new Estudiante("Pepe", 15, "hombre", "4º", "A")

class Profesor extends Persona {
    constructor(nombre, edad, genero, modulo, nivel) {
        super (nombre, edad, genero)
        this.modulo = modulo
        this.nivel = nivel
    }

    imparte() {
        return `El módulo ${this.modulo} de nivel ${this.nivel} ha sido asignado al profesor/a ${this.nombre}`
    }

}

let nuevoProfesor = new Profesor("Luisa", 45, "mujer", "estadística", "universitario")

let contenedor = document.getElementById("casosPrueba")

let parrafo1 = document.createElement("p")
let parrafo2 = document.createElement("p")
let parrafo3 = document.createElement("p")

parrafo1.textContent = nuevaPersona.getInfo()
parrafo2.textContent = nuevoEstudiante.matriculado()
parrafo3.textContent = nuevoProfesor.imparte()

contenedor.appendChild(parrafo1)
contenedor.appendChild(parrafo2)
contenedor.appendChild(parrafo3)

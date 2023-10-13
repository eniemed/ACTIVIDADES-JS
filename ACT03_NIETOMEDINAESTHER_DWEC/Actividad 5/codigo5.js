class Persona {
    constructor(id, nombre, apellidos, fecha_nacimiento) {
        this.id = id
        this.nombre = nombre
        this.apellidos = apellidos
        this.fecha_nacimiento = fecha_nacimiento
    }

    get getID() {
        this.id = id
    }
    
    set setID(id) {
        if (isNaN(id)) {
            alert("La id debe ser un número")
        } else {
            this.id = id
        }
    }

    concentrarse() {
        return `${this.nombre} se está concentrando`
    }
}

class CEO extends Persona {
    constructor(id, nombre, apellidos, fecha_nacimiento, jefes_asignados){
        super(id, nombre, apellidos, fecha_nacimiento)
        this.jefes_asignados = jefes_asignados

    }

    
    get getJefe() {
        this.jefes_asignados = this.jefes_asignados
    }


    set setJefe(jefes_asignados) {
        if (jefes_asignados instanceof Jefe) {
            this.jefes_asignados = jefes_asignados
        } else {
            return alert("El jefe asignado no es un jefe")
        }
    }

    viajar() {
        return `${this.nombre} está viajando`
    }

    anadir_jefe() {
        return `${this.nombre} ha añadido un nuevo jefe`
    }

    dirigir_jefes() {
        return `${this.nombre} está dirigiendo a los jefes`
    }
    
}

class Jefe extends Persona {
    constructor(id, nombre, apellidos, fecha_nacimiento, dpto_responsable, equipo) {
        super(id, nombre, apellidos, fecha_nacimiento)
        this.dpto_responsable = dpto_responsable
        this.equipo = equipo

    }

    get getEquipo() {
        return this.equipo
    }

    set setEquipo(equipo) {
        if (equipo instanceof Programador) {
            this.equipo = equipo
        } else {
            return alert("El equipo no es un equipo válido")
        }
    }

    anadir_al_equipo() {
        return `${this.nombre} ha añadido un nuevo programador al equipo`
    }

    reunirse_con_equipo() {
        return `${this.nombre} se está reuniendo con el equipo`
    }

}

class Programador extends Persona {
    constructor(id, nombre, apellidos, fecha_nacimiento, titulacion, experiencia) {
        super(id, nombre, apellidos, fecha_nacimiento)
        this.titulacion = titulacion
        this.experiencia = experiencia
    }

    get getExp() {
        return this.experiencia
    }

    set setExp(experiencia) {
        if (isNaN(experiencia)) {
            return alert("La experiencia debe indicarla con un número")
        } else {
            this.experiencia = experiencia
        }
    }

    programar() {
        return `${this.nombre} está programando`
    }
}
let nuevoProgramador = new Programador(1234, "Laura", "Sánchez", "19/04/2000", "Técina en DAW", 3)
let nuevoJefe = new Jefe(1245, "Jose", "López", "10/02/1982", "DAW", nuevoProgramador)
let nuevoCEO = new CEO(123, "María", "García", "12/01/1980", nuevoJefe)

let contenedor = document.getElementById("casosPrueba")

let parrafo1 = document.createElement("p")
let parrafo2 = document.createElement("p")
let parrafo3 = document.createElement("p")
let parrafo4 = document.createElement("p")
let parrafo5 = document.createElement("p")
let parrafo6 = document.createElement("p")
let parrafo7 = document.createElement("p")
let parrafo8 = document.createElement("p")
let parrafo9 = document.createElement("p")
let parrafo10 = document.createElement("p")
let parrafo11 = document.createElement("p")
let parrafo12 = document.createElement("p")


parrafo1.textContent = nuevoProgramador.programar()

parrafo2.textContent = nuevoJefe.anadir_al_equipo()
parrafo3.textContent = nuevoJefe.reunirse_con_equipo()

parrafo4.textContent = nuevoCEO.anadir_jefe()
parrafo5.textContent = nuevoCEO.dirigir_jefes()
parrafo6.textContent = nuevoCEO.viajar()

parrafo7.textContent = nuevoJefe.concentrarse()
parrafo8.textContent = nuevoCEO.concentrarse()
parrafo9.textContent = nuevoProgramador.concentrarse()

contenedor.appendChild(parrafo1)
contenedor.appendChild(parrafo2)
contenedor.appendChild(parrafo3)
contenedor.appendChild(parrafo4)
contenedor.appendChild(parrafo5)
contenedor.appendChild(parrafo6)
contenedor.appendChild(parrafo7)
contenedor.appendChild(parrafo8)
contenedor.appendChild(parrafo9)




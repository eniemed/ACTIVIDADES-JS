/*
Escribe un script que pida al usuario su nombre y apellidos y muestre:
El tamaño del nombre más los apellidos (sin contar espacios).
La cadena en minúsculas y en mayúsculas.
Que divida el nombre y los apellidos y los muestre en 3 líneas, donde ponga:
Nombre
Apellido 1 
Apellido 2
Una propuesta de nombre de usuario, compuesto por la inicial del nombre, el primer apellido y la inicial del segundo apellido, Por ejemplo, para Laura Folgado Galache sería lfolgadog.
Otra propuesta de nombre de usuario, compuesto por las tres primeras letras del nombre (con la primera en mayúscula) y de los dos apellidos.
Por ejemplo, para el nombre anterior sería Laufolgal

*/



let nombreApellidos = prompt("Introduce tu nombre y apellidos: ")

let tamañoNombre = (nombreApellidos.split(" ").join("")).length

let cadenaMayus = nombreApellidos.toUpperCase

let cadenaMinus = nombreApellidos.toLowerCase

let separar = nombreApellidos.split

let nombre = separar[0]

let apellido1 = separar[1]

let apellido2 = separar[2]

for (let i = 0; i < tamañoNombre; i++) {
    

}
let primeraLetra = cadenaMinus.substr(0, 3)
console.log(primeraLetra);

let usuario1 = `${nombre[0]}${apellido1}${apellido2[0]}`

let usuario2 = `${nombre[0]}${nombre[1]}${nombre[2]}${apellido1[0]}${apellido2[1]}${apellido2[1]}`

alert(`tamañoNombre - ${tamañoNombre}`)
alert(`cadenaMayus - ${cadenaMayus} \n cadenaMinus - ${cadenaMinus}`)
alert(`${nombre} \n ${apellido1} \n ${apellido2}`)
alert(usuario1)
alert(usuario2)





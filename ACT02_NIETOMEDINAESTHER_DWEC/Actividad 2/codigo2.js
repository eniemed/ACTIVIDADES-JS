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

if (nombreApellidos.trim() !== "" && typeof(nombreApellidos) === "string") {

    let tamañoNombre = (nombreApellidos.split(" ").join("")).length

    let separar = nombreApellidos.split(" ")

    let nombre = separar[0].toLowerCase()

    let apellido1 = separar[1].toLowerCase()

    let apellido2 = separar[2].toLowerCase()

    let primeraLetra = nombre[0];
    console.log(primeraLetra);

    let usuario1 = `${nombre[0]}${apellido1}${apellido2[0]}`

    let usuario2 = `${nombre[0].toUpperCase()}${nombre[1]}${nombre[2]}${apellido1[0]}${apellido1[1]}${apellido1[2]}${apellido2[0]}${apellido2[1]}${apellido2[2]}`

    alert(`tamañoNombre - ${tamañoNombre}`)
    alert(`cadenaMayus - ${nombreApellidos.toUpperCase()} \n cadenaMinus - ${nombreApellidos.toLowerCase()}`)
    alert(`${nombre} \n ${apellido1} \n ${apellido2}`)
    alert(usuario1)
    alert(usuario2)

} else {
    alert("No has introducido valores correctos.")
}







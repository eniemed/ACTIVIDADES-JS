/*
Escribir un script que simule el lanzamiento de 2 dados:
Utiliza la función Math.random() para obtener números aleatorios entre 1 y 6 para cada uno de los lanzamientos de los dados
Luego, suma el valor de los 2 dados y almacena su resultado
Ahora, haz 36.000 lanzamientos
Por último, muestra por pantalla el número de veces que ha salido cada resultado

*/



for (let i = 36000; i >= 0; i--) {

    let dado1 = Math.ceil(Math.random() * 6)
    let dado2 = Math.ceil(Math.random() * 6)

    let sumaDados = dado1 + dado2
    
}
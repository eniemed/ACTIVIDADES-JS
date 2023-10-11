/*
Implementar una función recursiva que reciba un parámetro n y repita n veces el string “bauuuba”. 
Por ejemplo, si pasamos el parámetro 5, devolverá “bauuuba bauuuba bauuuba bauuuba bauuuba”
NOTA: no puedes utilizar el método String.repeat() 
*/

function repeticion(n) {
    
    if (n === 1) {
        return "bauuuba ";
    } 
    else {
        return "bauuuba " + repeticion(n - 1);
    }
}

let valorRecibido = prompt("Ingresa un número: ");

valorRecibido = parseInt(valorRecibido.trim());

if (!isNaN(valorRecibido) && valorRecibido > 0) {
    alert(repeticion(valorRecibido));
} else {
    alert("No has introducido un valor válido. Introduce un número mayor que 0");
}



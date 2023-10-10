/*
Diseña un sitio web que muestre la hora actual actualizada por segundos. La hora debe tener el formato hh:mm:ss am/pm de forma que si la hora, 

los minutos o los segundos tienen un solo dígito se debe añadir un 0 para completar el formato.

Las horas se presentarán en formato de 12 horas, añadiendo am o pm dependiendo si la hora es anterior o posterior a las 12 del mediodía.

Por ejemplo:

*/


moment.locale("es")

function hora() {

    const hora = moment()
    const horaFormateada = hora.format("hh:mm:ss A") //hh para formato 12 horas y HH para formato 24 horas
    document.getElementById("hora").textContent = horaFormateada

}

setInterval(hora, 1000);



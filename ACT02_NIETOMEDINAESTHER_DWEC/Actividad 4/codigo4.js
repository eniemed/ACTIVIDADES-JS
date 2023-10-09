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

    return horaFormateada
}

alert(hora())

//CÓMO HACER QUE APAREZCA EN EL CUERPO DEL HTML EN VEZ DE CON ALERT?
//CÓMO HACER QUE SALGA UN ALERT CON EL RESULTADO DE LA FUNCIÓN SOLO AL DARLE A UN BOTÓN DEFINIDO EN EL HTML


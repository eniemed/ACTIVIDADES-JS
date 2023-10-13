/*

APUNTES DE CLASE

 const diaHoy = new Date()
        let valor

        valor = diaHoy.getMonth() //el mes pone 8 aunque es el 9, ya que enero lo considera el mes 0
        console.log(valor)

        valor = diaHoy.getDay() //sale 3 porque hoy es el tercer día de la semana
        console.log(valor)

        valor = diaHoy.getDate() //día (hoy es 27, así que sale 27)
        console.log(valor)

        valor = diaHoy.getFullYear() //año
        console.log(valor)

        valor = diaHoy.getTime() //lo que ha pasado desde no sé qué fecha
        console.log(valor)

        //vamos a usar siempre una libería externa llamada "MOMENT", y no lo anterior.

        valor = diaHoy.setFullYear(2018)

        console.log(diaHoy.getFullYear())

        <script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.29.4/moment.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.29.4/moment-with-locales.min.js"></script>  PONER SIEMPRE ANTES DE LLAMAR AL .JS

        moment.locale("es")

        console.log(moment().format("MMM Do YY"))

        console.log(moment().format("MMM Do YY, h:m", diaHoy))



Ejercicio 3
La primera semana del año es la que tiene el primer jueves de Enero. Todos los años tienen 52 semanas, excepto los años bisiestos que tienen 53 semanas.
Crea un script que reciba un string en formato YYYY-MM-DD y devuelva a qué número de semana pertenece una fecha dada.

2023-10-09
*/

moment.locale("es")

function date(fecha) {
        let fechaFormateada = moment(fecha).format('YYYY-MM-DD')

        let semana = moment(fechaFormateada).weeks()
    
        return `La fecha ${fechaFormateada} corresponde a la semana número ${semana} del año`
}

const fechaPedir = prompt("Introduce una fecha en formado YYYY-MM-DD")

if (fechaPedir.trim() === "" ) {
        alert("Fecha inválida")
} else {
        alert(date(fechaPedir))
}



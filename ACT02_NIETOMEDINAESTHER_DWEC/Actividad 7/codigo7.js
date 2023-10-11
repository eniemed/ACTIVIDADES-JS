

function ventanas() {

    let anchoVentana = 400
    let altoVentana = 400

    let posicionX = Math.round(Math.random(0) * 8000)
    console.log(posicionX + " X");

    let posicionY = Math.round(Math.random(0) * 1000)
    console.log(posicionY + " Y");

    let creciendo = true

    let ventana = window.open("about:blank", "", `width = ${anchoVentana}, height = ${altoVentana}, top = ${posicionY}, left = ${posicionX}`)

    const intervalo = setInterval(() => {
        if (anchoVentana === 400) { //Si llega a 400 o es 400, se define que NO tiene que crecer (DISMINUYENDO)
            creciendo = false;
        } else if (anchoVentana === 160) { //Si llega a 160 se define que SÍ tiene que crecer (CRECIENDO)
            creciendo = true;
        }

        if (creciendo) { //cuando se ha definido arriba CRECIENDO
            anchoVentana += 40;
            altoVentana += 40;
        } else {        //cuando se ha definido arriba DISMINUYENDO
            anchoVentana -= 40;
            altoVentana -= 40;
        }

        ventana.resizeTo(anchoVentana, altoVentana)
        
    }, 1000)

}
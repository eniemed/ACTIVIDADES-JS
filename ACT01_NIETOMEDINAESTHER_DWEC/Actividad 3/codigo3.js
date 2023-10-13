

function enviar() {
    var nombreInput = document.getElementById('nombre').value;
    var horaInput = document.getElementById('hora').value;

    if (horaInput >= 6 && horaInput < 12) {
        alert(`¡Buenos días, ${nombreInput}!`);
    } else if (horaInput >= 12 && horaInput <= 20) {
        alert(`¡Buenas tardes, ${nombreInput}!`);
    } else {
        alert(`¡Buenas noches, ${nombreInput}!`);
    }
}

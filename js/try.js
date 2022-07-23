let nombreUsuario = prompt('Ingresar username para ver préstamos disponibles');

let opciones =prompt('Hola, ' + nombreUsuario + '. Seleccionar entre las siguientes opciones: \n 1 - $100.000 \n2 - $200.000 \n3 - $300.000');

while ((opciones >=1) && (opciones <=3)){

switch (opciones) {
    case '1':
        let casoUno = prompt('El interés de este préstamo es del 5% mensual, deberás abonar: $' + 100000 * 0.05 + ' por cada mes. Desea continuar? \n 1 - Si \n 2 - No')
        if (casoUno == 1) {
            alert('Puede retirar el dinero, gracias por confiar en nosotros.')
        } else if (casoUno == 2) {
            alert('Operacion cancelada')
        } else {
            alert('Seleccionar una opción válida')
        }
        break;
    case '2':
        let casoDos = prompt('El interés de este préstamo es del 4.5% mensual, deberás abonar: $' + 200000 * 0.045 + ' por cada mes. Desea continuar? \n 1 - Si \n 2 - No')
        if (casoDos == 1) {
            alert('Puede retirar el dinero, gracias por confiar en nosotros.')
        } else if (casoDos == 2) {
            alert('Operacion cancelada')
        } else {
            alert('Seleccionar una opción válida')
        }
        break;
    case '3':
        let casoTres = prompt('El interés de este préstamo es del 4% mensual, deberás abonar: $' + 300000 * 0.04 + ' por cada mes. Desea continuar? \n 1 - Si \n 2 - No')
        if (casoTres == 1) {
            alert('Puede retirar el dinero, gracias por confiar en nosotros.')
        } else if (casoTres == 2) {
            alert('Operacion cancelada')
        } else {
            alert('Seleccionar una opción válida')
        }
        break;
    default:
        alert('Error, seleccionar una opción válida.')
}
opciones = prompt('Porfavor, ' + nombreUsuario + '. Seleccionar entre las siguientes opciones: \n 1 - $100.000 \n2 - $200.000 \n3 - $300.000')
}
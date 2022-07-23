/* function calcularPorcenatjes(rm, porcentaje) {
    return rm * (porcentaje / 100);
}
let resultado = calcularPorcenatjes(parseFloat(prompt('Ingresar RM actual')), parseFloat(prompt('Ingresar porcentaje')));

alert('El peso que debes poner en la barra son: ' + resultado + ' kilos.');

if (resultado > 99){
    alert('Tenes un RM muy alto, felicitaciones! A seguir asi.')
}else{
    alert('Exitos en tu entrenamiento!')
} */


class Ejercicio {
    constructor(nombre, rm, porcentaje) {
        this.nombre = nombre;
        this.rm = rm;
        this.porcentaje = porcentaje;
    }
    peso() {
        return this.rm * (this.porcentaje / 100)
    }
}

const ejercicios = [];


let rmSnatch = parseFloat(prompt('Ingresar RM de Snatch'));
let porcentajeSnatch = parseFloat(prompt('Ingresar porcentaje'));
const ejercicio1 = new Ejercicio('Snatch', rmSnatch, porcentajeSnatch);
console.log(ejercicio1);
let resultado1 = ejercicio1.peso();
alert('El peso que debes poner en la barra son ' + resultado1 + ' kilos.');
if (resultado1 > 99) {
    alert('Tenes un RM muy alto, felicitaciones! A seguir asi.')
} else {
    alert('Exitos en tu entrenamiento!')
}



let rmClean = parseFloat(prompt('Ingresar RM de Clean'));
let porcentajeClean = parseFloat(prompt('Ingresar porcentaje'));
const ejercicio2 = new Ejercicio('Clean', rmClean, porcentajeClean);
console.log(ejercicio2);
let resultado2 = ejercicio2.peso();
alert('El peso que debes poner en la barra son ' + resultado2 + ' kilos.');
if (resultado2 > 99) {
    alert('Tenes un RM muy alto, felicitaciones! A seguir asi.')
} else {
    alert('Exitos en tu entrenamiento!')
}



let rmJerk = parseFloat(prompt('Ingresar RM Jerk'));
let porcentajeJerk = parseFloat(prompt('Ingresar porcentaje'));
const ejercicio3 = new Ejercicio('Jerk', rmJerk, porcentajeJerk);
console.log(ejercicio3);
let resultado3 = ejercicio3.peso();
alert('El peso que debes poner en la barra son ' + resultado3 + ' kilos.');
if (resultado3 > 99) {
    alert('Tenes un RM muy alto, felicitaciones! A seguir asi.')
} else {
    alert('Exitos en tu entrenamiento!')
}


let rmBack = parseFloat(prompt('Ingresar RM de Back'));
let porcentajeBack = parseFloat(prompt('Ingresar porcentaje'));
const ejercicio4 = new Ejercicio('Back', rmBack, porcentajeBack);
console.log(ejercicio4);
let resultado4 = ejercicio4.peso();
alert('El peso que debes poner en la barra son ' + resultado4 + ' kilos.');
if (resultado4 > 99) {
    alert('Tenes un RM muy alto, felicitaciones! A seguir asi.')
} else {
    alert('Exitos en tu entrenamiento!')
}


ejercicios.push(ejercicio1);
ejercicios.push(ejercicio2);
ejercicios.push(ejercicio3);
ejercicios.push(ejercicio4);

console.log(ejercicios);
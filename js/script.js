function calcularPorcenatjes(rm, porcentaje) {
    return rm * (porcentaje / 100);
}
let resultado = calcularPorcenatjes(parseFloat(prompt('Ingresar RM actual')), parseFloat(prompt('Ingresar porcentaje')));

alert('El peso que debes poner en la barra son: ' + resultado + ' kilos.');

if (resultado > 99){
    alert('Tenes un RM muy alto, felicitaciones! A seguir asi.')
}else{
    alert('Exitos en tu entrenamiento!')
}

//Ejemplo 1
let numero = parseInt(prompt("Ingresar número"));

for(i=0;i<5;i++){
let resultado = numero + i;
alert(numero+"+"+i+"="+resultado);
}


//Ejemplo 2
let password = prompt("Ingresar contraseña");

while (password != "ESC"){
    alert("La contraseña "+password+" es incorrecta.");
    password = prompt("Vuelve a intentarlo.");
}


//Ejemplo 3
let numeroIngresado = parseInt(prompt("Ingresar número:"));

for (i=0; i < numeroIngresado; i++){
    alert("Hola")
}
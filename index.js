//nuestras variables
let numeroSecreto = 1;
let numeroMaximo = 13;
let numeroMinimo = 1;
let maximosIntentos = 4;
let intentos = 1;
let listaNumeros = [];

//damos inicio a principios(); para activar su function
principios();

//function asignarTextoElemento para poder cambiar facilmente los textos
function asignarTextoElemento(elemento, texto,){
    let hP = document.querySelector(elemento);
    hP.innerHTML = texto;
}




//function principios(); la cual nos asigna el texto, nos genera un numero, nos dice nuestros intentos y nos retorna el nuemero secreto
function principios(){
    asignarTextoElemento("h1","¿En qué número piensa Kurapika?");
    //asignarTextoElemento("h2","ffsfs")
    asignarTextoElemento("p",`Dime un número del ${numeroMinimo} al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
    return generarNumeroSecreto;
}

//limpia la caja luego de que enviamos un numero
function limpiarCaja(){
    document.querySelector("#ryodan").value = "";
}

//genera nuestro numero secreto
function generarNumeroSecreto(){
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    console.log(numeroGenerado)
    if (listaNumeros.length == numeroMaximo) {
        asignarTextoElemento("p",`Kurapika ya no puede pensar en otro número. Por favor pulsa F5 o recarga la página para seguir jugando`);
        document.getElementById("send").setAttribute("disabled","true");
    }else{
    if (listaNumeros.includes(numeroGenerado)){
        return generarNumeroSecreto();
    }else{
        listaNumeros.push(numeroGenerado);
        return numeroGenerado;
    }
    }
}

//nos verifica nuestro intento
function intentoUsuario(){
    let numeroUsuario = parseInt(document.getElementById("ryodan").value);
    console.log(numeroUsuario)
    if (numeroSecreto == numeroUsuario) {
    asignarTextoElemento("p",`Acertaste, el número de Kurapika era ${numeroSecreto}`);
    document.getElementById("send").setAttribute("disabled","true");
    document.getElementById("reset").removeAttribute("disabled");
    }else{
        if (numeroUsuario > numeroSecreto){
            asignarTextoElemento("p","El número de Kurapika es menor");
        }else{
        asignarTextoElemento("p","El número de Kurapika es mayor");
        }
        intentos++;
        limpiarCaja();
        if (intentos > maximosIntentos){
            asignarTextoElemento("p",`Agotaste tus ${maximosIntentos} intentos!. El número de Kurapika era ${numeroSecreto}`);
            document.getElementById("send").setAttribute("disabled","true");
            document.getElementById("reset").removeAttribute("disabled");
        }
        return;
    }
    
}

//la function reiniciarJuego(); hace referencia al botón Nuevo número
function reiniciarJuego(){
    limpiarCaja();
    principios();
    document.getElementById("send").removeAttribute("disabled");
    document.querySelector("#reset").setAttribute("disabled","true");
}

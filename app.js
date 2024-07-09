let numeroSecreto = 0;
let intentos = 0;
let listaNumeroSorteados = [];
let maximoIntento = 10;
// activa boton intentar
document.getElementById('intentar').removeAttribute('disabled');



function asignarTextoElemento(elemento,texto){
    let elementoHtml = document.querySelector(elemento);
    elementoHtml.innerHTML = texto;
    return;
}
// compara el numero ingresado con el numero secreto
function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    // condicion cuando se acierta mostrando mensaje con operador terniario
    if(numeroDeUsuario == numeroSecreto){
        asignarTextoElemento('p', `Acertaste el numero ${intentos} ${(intentos === 1) ?'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        // esta condicion es cuando no se acierta y ayuda encontrar el numero (:
        if(numeroDeUsuario > numeroSecreto){
            asignarTextoElemento('P', 'El numero secreto es menor');
        } else{
            asignarTextoElemento('p', 'el numero secreto es mayor');
        }
        intentos++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja(){
    document.querySelector('#valorUsuario').value = '';

}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()* maximoIntento )+ 1;


    
    if(listaNumeroSorteados.length == maximoIntento){
        asignarTextoElemento('p','ya se sortearon todos los numeros posibles');
        document.querySelector('#intentar').setAttribute('disabled','true');
    } else { 
        // si el numero generado esta en la lista
        if(listaNumeroSorteados.includes(numeroGenerado)){
            return generarNumeroSecreto();
        }else{
            listaNumeroSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
    
    
}
function condicionesIniciales() {
    asignarTextoElemento('h1','Juego del número secreto');
    asignarTextoElemento('p', `Ingresa un numero del 1 al ${maximoIntento}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
    
}

function reiniciarJuego() {
    //limpiar la caja 
    limpiarCaja();
    // indicar mensaje de intervalos de numeros
    // generar numero aleatorio
    // inicializar nuevos intentos
    condicionesIniciales();
    //deshabilitar el boton de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled','true');
    
}

condicionesIniciales();



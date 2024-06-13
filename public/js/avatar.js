//Variables que no estan dentro de ninguna funcion
let ataqueJugador; //Variables globales
let ataqueEnemigo; //Variables globales

function iniciarJuego(){
    let botonPersonajeJugador = document.getElementById('boton-personaje');
    botonPersonajeJugador.addEventListener('click', seleccionarPersonajeJugador);

    let botonPunio = document.getElementById('boton-punio');
    botonPunio.addEventListener('click', ataquePunio);
    let botonPatada = document.getElementById('boton-patada');
    botonPatada.addEventListener('click', ataquePatada);
    let botonBarrida = document.getElementById('boton-barrida');
    botonBarrida.addEventListener('click', ataqueBarrida);
}

function seleccionarPersonajeJugador(){ //tarea agregar activad a la funcion al alegir el personaje
    let inputZuko = document.getElementById('zuko').checked;
    let inputKatara = document.getElementById('katara').checked;
    let inputAang = document.getElementById('toph').checked;
    let inputToph = document.getElementById('aang').checked;

    let personajeJugador = document.getElementById('personaje-jugador');

    if(inputZuko){
        // alert("SELECCIONASTE TU PERSONAJE ZUKO");
        personajeJugador.innerHTML = 'Zuko';
    }else if(inputKatara){
        // alert("SELECCIONASTE TU PERSONAJE KATARA");
        personajeJugador.innerHTML = 'Katara';
    }else if(inputToph){
        // alert("SELECCIONASTE TU PERSONAJE TOPH");
        personajeJugador.innerHTML = 'Aang';
    }else if(inputAang){
        // alert("SELECCIONASTE TU PERSONAJE AANG");
        personajeJugador.innerHTML = 'Toph';
    }

    seleccionarPersonajeEnemigo()
}

function aleatorio(min, max){
    return Math.floor(Math.random() * (max-min) + min);
}


function seleccionarPersonajeEnemigo(){

    let personajeEnemigo = document.getElementById('personaje-enemigo');
    let random = Math.floor(Math.random() * 4);
    // let random = aleatorio(1, 4) // podria ser tambien asi utilizando la funcion aleatorio

    if(random === 0){
        personajeEnemigo.innerHTML = 'Zuko';
    }else if(random === 1){
        personajeEnemigo.innerHTML = 'Katara';
    }else if(random === 2){
        personajeEnemigo.innerHTML = 'Aang';
    }else if(random === 3){
        personajeEnemigo.innerHTML = 'Toph';
    }
}


function ataquePunio(){//modificamos la variable global ataqueJugador
    ataqueJugador = 'Punio';
    ataqueAleatorioEnemigo();
}

function ataquePatada(){//modificamos la variable global ataqueJugador
    ataqueJugador = 'Patada';
    ataqueAleatorioEnemigo();
}

function ataqueBarrida(){//modificamos la variable global ataqueJugador
    ataqueJugador = 'Barrida';
    ataqueAleatorioEnemigo();
}


function ataqueAleatorioEnemigo(){
    let ataqueAleatorio = aleatorio(1,4);

    if(ataqueAleatorio == 1){
        ataqueEnemigo = 'Punio';
    }else if(ataqueAleatorio == 2){
        ataqueEnemigo = 'Patada';
    }else if(ataqueAleatorio == 3){
        ataqueEnemigo = 'Barrida';
    }

    fight()
}

function fight(){
    if(ataqueJugador == ataqueEnemigo){
        crearMensaje("EMPATASTE!")
    }else if(ataqueJugador == 'Punio' && ataqueEnemigo == 'Barrida'){
        crearMensaje("GANASTE!")
    }else if(ataqueJugador == 'Patada' && ataqueEnemigo == 'Punio'){
        crearMensaje("GANASTE!")
    }else if(ataqueJugador == 'Barrida' && ataqueEnemigo == 'Patada'){
        crearMensaje("GANASTE!")
    }else{
        crearMensaje("PERDISTE!")
    }
}


function crearMensaje(resultado){
    let seccionMensaje = document.getElementById('mensajes');//llamamos a la seccion por el ID
    let parrafo = document.createElement('p');
    parrafo.innerHTML = `Tu personaje atacó con todo el poder del ${ataqueJugador}, el personaje del enemigo atacó con el poder de la ${ataqueEnemigo} - ${resultado} la ronda 🎉`;
    seccionMensaje.appendChild(parrafo);
}


window.addEventListener('load', iniciarJuego);
//------------------------------------------------------ | | ------------------------------------------------------//
//Recordar que el boton punio le gana a la barrida
//             el boton patada la gana al punio
//             el boton barrida la gana a la patada  

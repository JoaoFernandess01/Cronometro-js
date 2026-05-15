const btnIniciar = document.getElementById('btnIniciar');
const btnParar = document.getElementById('btnParar');
const btnLimpar = document.getElementById('btnLimpar');
const btnMarcar = document.getElementById('btnMarcar');
const listaMarcadores = document.getElementById('listaMarcas');

const txtsegundos = document.getElementById('segundos');
const txtminutos = document.getElementById('minutos');
const txthoras = document.getElementById('horas');

let segundos = 0;
let minutos = 0;
let horas = 0;
let intervalo = 1000;
let cronometroRodando;

function iniciarCronometro(){

     cronometroRodando = setInterval(() => {
        segundos++

        if(segundos == 60){
            segundos = 0;
            minutos++
            return;
        }
        if(minutos == 60){
            minutos = 0;
            horas++
            return;
        }
         console.log(`${horas}:${minutos}:${segundos}`);

    }, intervalo);

}

function pararCronometro(){
    clearInterval(cronometroRodando)
    console.log("parou")
}

btnIniciar.addEventListener("click" , iniciarCronometro)
btnParar.addEventListener("click" , pararCronometro)
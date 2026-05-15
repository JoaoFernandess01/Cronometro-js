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
let tempoPadraoIntervalo = 10;
let cronometroRodando;

btnParar.disabled = true;
btnParar.classList.add('desativado')
btnLimpar.disabled = true;
btnLimpar.classList.add('desativado')
btnMarcar.disabled = true;
btnMarcar.classList.add('desativado')

btnIniciar.addEventListener("click" , ()=>{
    iniciarCronometro()
    btnIniciar.disabled = true;
    btnIniciar.classList.add('desativado');
    
    btnParar.disabled = false;
    btnParar.classList.remove('desativado')

    btnLimpar.disabled = false;
    btnLimpar.classList.remove('desativado')

    btnMarcar.disabled = false;
    btnMarcar.classList.remove('desativado')

})
btnParar.addEventListener("click" , ()=>{
    pararCronometro(cronometroRodando)
    btnParar.disabled = true;
    btnParar.classList.add('desativado')
    
    btnIniciar.classList.remove('desativado')
    btnIniciar.disabled = false;
    btnIniciar.textContent = "Continuar"
})



function iniciarCronometro(){
     cronometroRodando = setInterval(() => {
        if(segundos == 59){
            segundos = 0;
            minutos++
            exibirTempoNaTela(txtminutos,formatarDoisCaracteres(minutos))
            return ;
        }
        segundos++
        exibirTempoNaTela(txtsegundos,formatarDoisCaracteres(segundos))

        if(minutos == 59){
            minutos = 0;
            horas++
            exibirTempoNaTela(txthoras,formatarDoisCaracteres(horas))
            return;
        }
    }, tempoPadraoIntervalo);  
}


function pararCronometro(setInterval){
    clearInterval(setInterval)
}

function formatarDoisCaracteres(tempo){
    return tempo < 10 ? `0${tempo}` : tempo;
}

function exibirTempoNaTela(elementoTempo, tempo){
    elementoTempo.textContent = tempo
}
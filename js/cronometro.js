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
let tempoPadraoIntervalo = 1000;
let cronometroRodando;


ativaDesativaBotao(btnParar,true);
ativaDesativaBotao(btnLimpar,true);
ativaDesativaBotao(btnMarcar,true);


btnIniciar.addEventListener("click" , ()=>{
    iniciarCronometro();
    
    ativaDesativaBotao(btnIniciar,true);
    ativaDesativaBotao(btnParar,false);
    ativaDesativaBotao(btnLimpar,false);
    ativaDesativaBotao(btnMarcar,false);
    
    
})
btnParar.addEventListener("click" , ()=>{
    pararCronometro(cronometroRodando);
    
    ativaDesativaBotao(btnParar,true)
    ativaDesativaBotao(btnIniciar,false)
    
})

btnLimpar.addEventListener("click", ()=>{
    limparCronometro(cronometroRodando)

    ativaDesativaBotao(btnIniciar,false)
    ativaDesativaBotao(btnParar,true);
    ativaDesativaBotao(btnLimpar,true);
    ativaDesativaBotao(btnMarcar,true);
})

function limparCronometro(setInterval){
    clearInterval(setInterval)
    segundos = 0;
    minutos = 0;
    horas = 0;
    exibirTempoNaTela(txthoras,formatarDoisCaracteres(horas))
    exibirTempoNaTela(txtsegundos,formatarDoisCaracteres(segundos))
    exibirTempoNaTela(txtminutos,formatarDoisCaracteres(minutos))
}


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

function ativaDesativaBotao(botao,estado){
    botao.disabled = estado;
    if(estado){
        botao.classList.add('desativado')
    }
    else{
        botao.classList.remove('desativado')
    }
}
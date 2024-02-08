/* let titulo = document.querySelector('h1');
titulo.innerHTML = 'Jogo do Número Secreto';

let paragrafo = document.querySelector('p');
paragrafo.innerHTML = 'Insira um número de 1 a 10'; */

let listaDeNusmerosSecretos = [];
let numeroMaximo = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;

    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate: 1.2});
}

exibirMensagemInicial();

function verificarChute(){
    let chute = document.querySelector('input').value;
    let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
    let mensagemPositiva = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}`;
    
    if(chute == numeroSecreto){
        exibirTextoNaTela('h1', 'Você acertou!');
        exibirTextoNaTela('p', mensagemPositiva);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else{
        if(chute > numeroSecreto){
            exibirTextoNaTela('p', 'O número secreto é menor');
        }else{
            exibirTextoNaTela('p', 'O número secreto é maior');
        }
        tentativas++;
        limparCampo();
    }
}

function exibirMensagemInicial(){
    exibirTextoNaTela('h1', 'Jogo do Número Secreto');
    exibirTextoNaTela('p', `Insira um número de 1 a ${numeroMaximo}`);
}

function gerarNumeroAleatorio(){
    let numeroGerado = parseInt(Math.random() * numeroMaximo + 1);
    let quantidadeDeNumerosGerados = listaDeNusmerosSecretos.length;

    if(quantidadeDeNumerosGerados == numeroMaximo){
        listaDeNusmerosSecretos = [];
    }

    if(listaDeNusmerosSecretos.includes(numeroGerado)){
        return gerarNumeroAleatorio();
    }else{
        listaDeNusmerosSecretos.push(numeroGerado);
        console.log(listaDeNusmerosSecretos);
        return numeroGerado;
    }
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo(){
    numeroSecreto = gerarNumeroAleatorio();
    tentativas = 1;
    limparCampo();
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}
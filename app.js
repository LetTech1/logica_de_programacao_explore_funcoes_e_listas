/* let titulo = document.querySelector('h1');
titulo.innerHTML = 'Jogo do Número Secreto';

let paragrafo = document.querySelector('p');
paragrafo.innerHTML = 'Insira um número de 1 a 10'; */

let numeroSecreto = gerarNumeroAleatorio();

function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

exibirTextoNaTela('h1', 'Jogo do Número Secreto');
exibirTextoNaTela('p', 'Insira um número de 1 a 100');

function verificarChute(){
    console.log(numeroSecreto);
}

function gerarNumeroAleatorio(){
    return parseInt(Math.random() * 10 + 1);
}
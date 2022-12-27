//Tarefas
// 1. Adicionar REGEX de validacao:
// - Deve funcionar apenas com letras minúsculas
// - Não devem ser utilizados letras com acentos nem caracteres especiais

// 2. Botao copiar

// 3. Exibir cor vermelha no texto de alerta, caso nao passe pelo REGEX

//seletores globais
let campoTexto = document.querySelector('.decodificador__campoTexto');
const msgInicial = document.querySelector('[data-msgInicial');
const msgCodificada = document.querySelector('[data-msgCodificada]');
const imgRadar = document.querySelector('[data-criptografia-img]');
const msgCriptografiaTextos = document.querySelector('[data-criptografia-textos]');
const alerta = document.querySelector('[data-alerta]');
const campoCodificacao = document.querySelector('.container__campoTextoCodificado');

//validacao
const regexPattern = /[^a-z\s]+/g;
const btnCriptografar = document.querySelector('[data-cripitografar]');

btnCriptografar.addEventListener('click', function(event) {
    event.preventDefault();
    validacao();
});

campoTexto.addEventListener('input', validacao);

function validacao() {
    if (campoTexto.value.match(regexPattern)) {
        alerta.classList.add('texto__invalido');
        document.querySelector('[data-cripitografar]').disabled = true;
        document.querySelector('[data-descripitografar]').disabled = true;
    } else {
        alerta.classList.remove('texto__invalido');
        document.querySelector('[data-cripitografar]').disabled = false;
        document.querySelector('[data-descripitografar]').disabled = false;
    }
}

//Criptografia
function criptografar() {
    //seletores
    const btnCriptografar = document.querySelector('[data-cripitografar]');
    btnCriptografar.addEventListener('click', () => {

        let textoDigitado = campoTexto.value;

        //criptografia
        let criptografia = textoDigitado.replace(/e/gim, "enter")
            .replace(/i/gim, "imes")
            .replace(/a/gim, "ai")
            .replace(/o/gim, "ober")
            .replace(/u/gim, "ufat");

        //retorno na tela
        msgInicial.style = "display:none";
        campoCodificacao.style = "display:flex";
        imgRadar.style = "display:none";
        msgCriptografiaTextos.style = "display:none";

        msgCodificada.innerHTML = `
            <textarea class="campoTextoCodificado" cols="70" rows="30">${criptografia}</textarea>
            <div class="container__copiar"></div>`

        copiar();

    });
}

//Descriptografia
function descriptografar() {
    //seletores
    const btnDescriptografar = document.querySelector('[data-descripitografar]');
    btnDescriptografar.addEventListener('click', () => {

        let textoDigitado = campoTexto.value;

        //descriptografia
        let resultado = textoDigitado.replace(/enter/gim, 'e')
            .replace(/imes/gim, "i")
            .replace(/ai/gim, "a")
            .replace(/ober/gim, "o")
            .replace(/ufat/gim, "u");

        //retorno na tela
        msgInicial.style = "display:none";
        campoCodificacao.style = "display:flex";
        imgRadar.style = "display:none";
        msgCriptografiaTextos.style = "display:none";

        msgCodificada.innerHTML = `
            <textarea class="campoTextoCodificado" cols="70" rows="30">${resultado}</textarea>
            <div class="container__copiar"></div>`

        copiar();

    });
}

//Botao copiar
function copiar() {
    const copiar = document.querySelector('[data-copiar]');
    copiar.style = "display: flex";
    copiar.addEventListener('click', () => {

        let textoCodificado = document.querySelector('.campoTextoCodificado');
        textoCodificado.select();
        document.execCommand('copy');

        textoCodificado.value = "";

    });
}

//Chamada das funções
criptografar();
descriptografar();


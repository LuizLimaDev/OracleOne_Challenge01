let campoTexto = document.querySelector('.decodificador__campoTexto');
const campoCodificacao = document.querySelector('.container__campoTextoCodificado');
const msgInicial = document.querySelector('[data-msgInicial');
const msgCodificada = document.querySelector('[data-msgCodificada]');
const imgRadar = document.querySelector('[data-criptografia-img]');
const msgCriptografiaTextos = document.querySelector('[data-criptografia-textos]');
const alerta = document.querySelector('[data-alerta]');
const btnCriptografar = document.querySelector('[data-cripitografar]');
const btnDescriptografar = document.querySelector('[data-descripitografar]');

//validacao
const regexPattern = /[^a-z\s]+/g;

btnCriptografar.addEventListener('click', function (event) {
    event.preventDefault();
    validacao();
});

campoTexto.addEventListener('input', validacao);

function validacao() {
    if (campoTexto.value.match(regexPattern)) {
        alerta.classList.add('texto__invalido');
        btnCriptografar.disabled = true;
        btnDescriptografar.disabled = true;
    } else {
        alerta.classList.remove('texto__invalido');
        btnCriptografar.disabled = false;
        btnDescriptografar.disabled = false;
    }
}

//Retorno na tela
function retornoNaTela() {
    msgInicial.style = "display:none";
    campoCodificacao.style = "display:flex";
    imgRadar.style = "display:none";
    msgCriptografiaTextos.style = "display:none";
}

//Criptografia
function criptografar() {
    btnCriptografar.addEventListener('click', () => {
        let textoDigitado = campoTexto.value;

        //criptografia
        let criptografia = textoDigitado.replace(/e/gim, "enter")
            .replace(/i/gim, "imes")
            .replace(/a/gim, "ai")
            .replace(/o/gim, "ober")
            .replace(/u/gim, "ufat");

        retornoNaTela();
        msgCodificada.innerHTML = `
            <textarea class="campoTextoCodificado" cols="70" rows="30">${criptografia}</textarea>`

        copiar();
    });
}

//Descriptografia
function descriptografar() {
    btnDescriptografar.addEventListener('click', () => {
        let textoDigitado = campoTexto.value;

        //descriptografia
        let resultado = textoDigitado.replace(/enter/gim, 'e')
            .replace(/imes/gim, "i")
            .replace(/ai/gim, "a")
            .replace(/ober/gim, "o")
            .replace(/ufat/gim, "u");

        retornoNaTela();
        msgCodificada.innerHTML = `
            <textarea class="campoTextoCodificado" cols="70" rows="30">${resultado}</textarea>`

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

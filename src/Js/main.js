//Tarefas
// 1. Adicionar REGEX de validacao:
// - Deve funcionar apenas com letras minúsculas
// - Não devem ser utilizados letras com acentos nem caracteres especiais

// 2. Exibir mensagem de erro para a entradas com caracteres invalidos ou vazio
// - Throw error 
// - try e tach

// 3. Botao copiar

//seletores globais
let campoTexto = document.querySelector('.decodificador__campoTexto');
const msgInicial = document.querySelector('[data-msgInicial');
const msgCodificada = document.querySelector('[data-msgCodificada]');
const imgRadar = document.querySelector('[data-criptografia-img]');
const msgCriptografiaTextos = document.querySelector('[data-criptografia-textos]');
const campoCodificacao = document.querySelector('.container__campoTextoCodificado');

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
        msgInicial.style= "display:none";
        campoCodificacao.style= "display:flex";
        imgRadar.style= "display:none";
        msgCriptografiaTextos.style= "display:none";

        msgCodificada.innerHTML = `
            <textarea class="campoTextoCodificado" cols="70" rows="30">${criptografia}</textarea>
            <div class="container__copiar">
                <button class="botoes copiar" data-copiar><img src="./src/img/copy.svg" alt="simbolo de copiar"
                class="botoes__copiar-img"> Copiar </button>
            </div>`
    });
}

function descriptografar () {
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
        msgInicial.style= "display:none";
        campoCodificacao.style= "display:flex";
        imgRadar.style= "display:none";
        msgCriptografiaTextos.style= "display:none";

        msgCodificada.innerHTML = `
            <textarea class="campoTextoCodificado" cols="70" rows="30">${resultado}</textarea>
            <div class="container__copiar">
                <button class="botoes copiar" data-copiar><img src="./src/img/copy.svg" alt="simbolo de copiar"
                class="botoes__copiar-img"> Copiar </button>
            </div>`
    });
}


criptografar();
descriptografar();

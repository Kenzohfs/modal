let main = document.querySelector('main');
let divMain = document.createElement('div');
let botao = document.createElement('button');
let modal = document.createElement('div');



divMain.className = 'divMain'
botao.className = 'botao'
botao.innerText = 'Cadastre-se'
botao.onclick = abrirModal;
modal.className = 'modal'

main.appendChild(botao);

//Dentro do modal:
let titulo = document.createElement('h2');
titulo.innerText = 'Modal';
titulo.style.marginBottom = '20px'
modal.appendChild(titulo);

let conteudo = document.createElement('div');
conteudo.className = 'conteudo';

let botaoDiv = document.createElement('div');
botaoDiv.className = 'botaoDiv'

modal.appendChild(conteudo);
modal.appendChild(botaoDiv);
//

//dentro do conteudo:
let inputNome = document.createElement('input');
let inputSobrenome = document.createElement('input');
let inputData = document.createElement('input');

inputNome.placeholder = 'Escreva seu nome';
inputSobrenome.placeholder = 'Escreva seu sobrenome';
inputData.type = 'date';

inputNome.className = 'input';
inputSobrenome.className = 'input';
inputData.className = ''

conteudo.appendChild(inputNome);
conteudo.appendChild(inputSobrenome);
conteudo.appendChild(inputData);
//

//botaoDIV:
let cancelar = document.createElement('button');
cancelar.className = 'cancelar'
cancelar.onclick = fechar;
cancelar.innerText = 'Cancelar'
botaoDiv.appendChild(cancelar);
//

function abrirModal() {
    main.appendChild(divMain);
    main.appendChild(modal);
    divMain.style.opacity = '0.5'
}

function fechar() {
    main.removeChild(modal);
    main.removeChild(divMain);
}
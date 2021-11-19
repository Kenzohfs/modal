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
titulo.style.marginBottom = '10%'
titulo.style.marginTop = '5%'
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

let enviar = document.createElement('button');
enviar.className = 'enviar';
enviar.innerText = 'Cadastrar'
enviar.onclick = cadastrarPessoa;
botaoDiv.appendChild(enviar);
//

function abrirModal() {
    main.appendChild(divMain);
    main.appendChild(modal);

    divMain.style.opacity = '0.5'
}

function fechar() {
    main.removeChild(modal);
    main.removeChild(divMain);
    inputNome.value = '';
    inputSobrenome.value = '';
    inputData.value = '';
}

let cadastrosArray = []
let cadastrosJson = {}

function alert(codigo) {
    let alert = document.createElement('div');

    alert.className = 'alert';
    main.appendChild(alert);
    main.removeChild(alert);

    if (codigo == 1) {
        main.appendChild(alert);
        alert.innerText = 'Todos os campos devem estar preenchidos!';
        alert.style.backgroundColor = 'red'
        alert.style.border = '2px solid rgb(141, 15, 15)';
    } else {
        main.appendChild(alert);
        alert.style.backgroundColor = 'rgb(20, 161, 20)';
        alert.style.border = '2px solid green';
        alert.innerText = 'Cadastrado!'

        fechar();
        tabela();
    }

    setTimeout(function () { main.removeChild(alert) }, 3000);
}

function cadastrarPessoa() {
    let nome = inputNome.value;
    let sobrenome = inputSobrenome.value;
    let data = inputData.value;

    if (nome == '' || sobrenome == '' || data == '') {
        alert(1);
    } else {
        let cadastrosJson = {
            nome: nome,
            sobrenome: sobrenome,
            data: data
        }

        cadastrosArray.push(cadastrosJson);

        alert(2);
    }
}

let tabelaDiv = document.createElement('div');

main.appendChild(tabelaDiv);

let pegarDado
let i = 0

function tabela() {
    let linhaTabela = document.createElement('div');
    let colunaTabelaCodigo = document.createElement('div');
    let colunaTabelaNome = document.createElement('div');
    let colunaTabelaSobrenome = document.createElement('div');
    let colunaTabelaData = document.createElement('div');

    tabelaDiv.className = 'tabelaDiv';
    linhaTabela.className = 'linhaTabela';
    colunaTabelaCodigo.className = 'coluna';
    colunaTabelaNome.className = 'coluna';
    colunaTabelaSobrenome.className = 'coluna';
    colunaTabelaData.className = 'coluna';

    tabelaDiv.appendChild(linhaTabela);
    linhaTabela.appendChild(colunaTabelaCodigo);
    linhaTabela.appendChild(colunaTabelaNome);
    linhaTabela.appendChild(colunaTabelaSobrenome);
    linhaTabela.appendChild(colunaTabelaData);

    pegarDado = cadastrosArray[i];

    colunaTabelaCodigo.innerText = (i + 1);
    colunaTabelaNome.innerText = pegarDado.nome;
    colunaTabelaSobrenome.innerText = pegarDado.sobrenome;
    colunaTabelaData.innerText = pegarDado.data;

    i++;
}
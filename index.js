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
titulo.innerText = 'Cadastro';
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
inputData.className = 'input'

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
        montarLinha(montarTabela());
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

//Badiuor esteve aqui

let tabelaDiv = document.createElement('div');

function montarLinha(tabela) {
    cadastrosArray.forEach(function (e) {
        let linhaDado = document.createElement('tr');

        let colunaNome = document.createElement('td');
        let colunaSobrenome = document.createElement('td');
        let colunaData = document.createElement('td');

        tabela.appendChild(linhaDado);

        colunaNome.innerText = e.nome;
        colunaSobrenome.innerText = e.sobrenome
        colunaData.innerText = e.data

        linhaDado.appendChild(colunaNome);
        linhaDado.appendChild(colunaSobrenome);
        linhaDado.appendChild(colunaData);
    });

    document.querySelector('table').style.textAlign = 'center';
}

function montarTabela() {
    let tabelaAtual = document.querySelector('table');

    if (tabelaAtual) {
        tabelaAtual.remove();
    }

    let tabela = document.createElement('table');

    let linha = document.createElement('tr');
    let colunaNomeHeader = document.createElement('th')
    let colunaSobrenomeHeader = document.createElement('th')
    let colunaDataHeader = document.createElement('th')

    colunaNomeHeader.innerText = 'Nome';
    colunaSobrenomeHeader.innerText = 'Sobrenome'
    colunaDataHeader.innerText = 'Data'

    colunaNomeHeader.style.fontSize = '18px'
    colunaSobrenomeHeader.style.fontSize = '18px'
    colunaDataHeader.style.fontSize = '18px'

    linha.appendChild(colunaNomeHeader);
    linha.appendChild(colunaSobrenomeHeader);
    linha.appendChild(colunaDataHeader);

    main.appendChild(tabela);
    tabela.appendChild(linha);

    return tabela;
}
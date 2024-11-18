let visor = document.getElementById('visor');
let operacaoAtual = '';
let numeroAtual = '';
let numeroAnterior = '';

function adicionarNumero(numero) {
    if (numeroAtual.length < 12) {
        numeroAtual += numero;
        atualizarVisor(numeroAtual);
    }
}

function operacao(op) {
    if (numeroAtual !== '') {
        numeroAnterior = numeroAtual;
        numeroAtual = '';
        operacaoAtual = op;
    }
}

function calcular() {
    if (numeroAnterior !== '' && numeroAtual !== '' && operacaoAtual !== '') {
        let resultado = 0;
        switch (operacaoAtual) {
            case '+':
                resultado = parseFloat(numeroAnterior) + parseFloat(numeroAtual);
                break;
            case '-':
                resultado = parseFloat(numeroAnterior) - parseFloat(numeroAtual);
                break;
            case '*':
                resultado = parseFloat(numeroAnterior) * parseFloat(numeroAtual);
                break;
            case '/':
                resultado = parseFloat(numeroAnterior) / parseFloat(numeroAtual);
                break;
        }
        numeroAtual = resultado.toString();
        operacaoAtual = '';
        numeroAnterior = '';
        atualizarVisor(numeroAtual);
    }
}

function limpar() {
    numeroAtual = '';
    numeroAnterior = '';
    operacaoAtual = '';
    atualizarVisor('0');
}

function atualizarVisor(valor) {
    visor.innerText = valor;
}

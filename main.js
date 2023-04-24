const { executarDivisao, caputarInputNumero, mostrarDivisao, validacao } = require("./js/calculadora")
const { juntaDoisNome, caputarInputNome, resultadoConcat } = require("./js/gerenciaDeNomes")

require("./style.css")

document.getElementById("btnConcat").addEventListener("click", iniciaConcat)
document.getElementById("btnDiv").addEventListener("click", dividirDoisNumeros)

function iniciaConcat() {

    // COM FUNCOES 
    // Entrada

    const elementoNome = caputarInputNome("inputNome")
    const elementoSobrenome = caputarInputNome("inputSobrenome")

    // Processamento
    const nomeCompleto = juntaDoisNome(elementoNome, elementoSobrenome)

    // Saida
    resultadoConcat(nomeCompleto)

    // SEM CHAMAR AS FUNÇÃO 

    // Entrada
    // const elementoNome = document.getElementById("inputNome").value
    // const elementoSobrenome = document.getElementById("inputSobrenome").value

    // Processamento
    // const nomeCompleto = juntaDoisNome(elementoNome, elementoSobrenome)

    // Saida
    // const elementoSaida = document.getElementById("retornoConcat")
    // elementoSaida.innerHTML = (nomeCompleto)
}


function dividirDoisNumeros() {

    const elementoNumero01 = caputarInputNumero("inputNum01")
    const elementoNumero02 = caputarInputNumero("inputNum02")

    // validacao
    if (validacao(elementoNumero01, elementoNumero02)) {
        const resultadoDivisao = executarDivisao(elementoNumero01, elementoNumero02)
        const resultado = mostrarDivisao(resultadoDivisao)
    }
}

//

        // SEM A FUNCAO VALICADAO
        // processamento
        // const resultadoDivisao = executarDivisao(elementoNumero01, elementoNumero02)

        // Saida
        // const resultado = mostrarDivisao(resultadoDivisao)





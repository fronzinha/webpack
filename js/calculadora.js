function executarDivisao(num1, num2) {

    return num1 / num2
}

function caputarInputNumero(id) {

    const resultadoDiv = document.getElementById(id).value

    return resultadoDiv

}

function mostrarDivisao(resultadoDaDivisao) {
    const elementoSaidaDiv = document.getElementById("retornoDiv")
    elementoSaidaDiv.innerHTML = (resultadoDaDivisao)


}


function validacao(elementoNumero01, elementoNumero02) {

    const validar = document.getElementById("retornoDiv")

    if (elementoNumero01 < 0 || elementoNumero02 <= 0) {
        validar.innerHTML = "Inválido"
        return false
    }

    return true
}


module.exports = {
    executarDivisao,
    caputarInputNumero,
    mostrarDivisao,
    validacao
}
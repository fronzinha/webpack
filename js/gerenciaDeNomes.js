function juntaDoisNome(nome, sobrenome) {
    if (nome == "" && sobrenome == "")
        return "Preencha todos os campos"

    return `${nome} ${sobrenome}`
}

function caputarInputNome(id) {

    const valorDoId = document.getElementById(id).value

    return valorDoId

}

function resultadoConcat(nomeCompleto) {

    const elementoSaida = document.getElementById("retornoConcat")
    elementoSaida.innerHTML = (nomeCompleto)
}

module.exports = {
    juntaDoisNome,
    caputarInputNome,
    resultadoConcat
}


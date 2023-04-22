function juntaDoisNome(nome, sobrenome) {
    if (nome == "" && sobrenome == "")
        return "Falta coisa"

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



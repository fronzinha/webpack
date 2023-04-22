const { juntaDoisNome } = require("../js/gerenciaDeNomes")


    describe("Função de Concatenar dois nomes", () => {
        it("deve retornar João Fronza ao receber João como nome e Fronza como Sobrenome", () => {
            const nome = "João"
            const sobrenome = "Fronza"

            const resultado = juntaDoisNome(nome, sobrenome)

            expect(resultado).toBe("João Fronza")
        })
   
        it("deve retornar Falta coisa ao receber vazio em nome e sobrenome", () => {
            const nome = ""
            const sobrenome = ""

            const resultado = juntaDoisNome(nome, sobrenome)

            expect(resultado).toBe("Falta coisa")
        })
    })

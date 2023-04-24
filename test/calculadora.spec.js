const { executarDivisao, validacao } = require("../js/calculadora")


describe("Função de Dividir dois numeros", () => {
    it("Deve retornar 2, ao receber numero 10 no primeiro input e no segundo numero 5", () => {

        const num01 = 10
        const num02 = 5

        const resultado = executarDivisao(num01, num02)

        expect(resultado).toBe(2)
    })
})


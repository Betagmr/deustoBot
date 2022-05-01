const bet = require(`../../commands/gambling/bet`)

describe("Test de bet", () => {
    const messageMock = {
        reply: jest.fn()
    }

    test("Faltan argumentos", () => {
        const args = [];
        const expectedOutput = "❌ No has introducido ningún valor, ni apuesta a ejecutar.";
        bet.run(null, messageMock, args);
        expect(messageMock.reply).toHaveBeenCalledTimes(1);
        expect(messageMock.reply).toHaveBeenCalledWith(expectedOutput);
    })
})
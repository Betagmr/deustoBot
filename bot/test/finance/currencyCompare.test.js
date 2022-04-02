const currencyCompare = require(`${process.cwd()}/commands/finance/currencyCompare.js`)

describe("Test del currencyCompare", () => {
    const messageMock = {
        reply: jest.fn()
    }

    test("Faltan argumentos", () => {
        const args = [];
        const expectedOutput = "No has introducido dos criptomonedas.";
        currencyCompare.run(null, messageMock, args);
        expect(messageMock.reply).toHaveBeenCalledTimes(1);
        expect(messageMock.reply).toHaveBeenCalledWith(expectedOutput);
    })
})
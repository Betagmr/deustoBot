const moveall = require(`${process.cwd()}/commands/admin/moveall.js`)

describe("Test del moveall", () => {
    const messageMock = {
        reply: jest.fn()
    }

    test("Faltan argumentos", () => {
        const args = [];
        const expectedOutput = "No has introducido ningun canal";
        moveall.run(null, messageMock, args);
        expect(messageMock.reply).toHaveBeenCalledTimes(1);
        expect(messageMock.reply).toHaveBeenCalledWith(expectedOutput);
    })
})
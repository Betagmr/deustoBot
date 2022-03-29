const move = require(`${process.cwd()}/commands/admin/move.js`)

describe("Test del move", () => {
    const messageMock = {
        reply: jest.fn()
    }

    test("No hay un canal introducido", () => {
        const args = [];
        const expectedOutput = "No has introducido ningun canal";
        move.run(null, messageMock, args);
        expect(messageMock.reply).toHaveBeenCalledTimes(1);
        expect(messageMock.reply).toHaveBeenCalledWith(expectedOutput);
    })

    test("No hay un usuario introducido", () => {
        const args = ["98123791912"];
        const expectedOutput = "No has introducido ningun Usuario";
        move.run(null, messageMock, args);
        expect(messageMock.reply).toHaveBeenCalledTimes(1);
        expect(messageMock.reply).toHaveBeenCalledWith(expectedOutput);
    })
})
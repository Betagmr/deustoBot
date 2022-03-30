const reminder = require(`${process.cwd()}/commands/agenda/reminder`)

describe("Test del reminder", () => {
    const messageMock = {
        reply: jest.fn()
    }

    // test("Se llama correctamente", () => {
    //     const args = ["10:20", "10/12/2022", "hola"];
    //     const expectedOutput = `Se te será recordado a las **10:20** del día **10/12/2022** que **hola**`;
    //     reminder.run(null, messageMock, args);
    //     expect(messageMock.reply).toHaveBeenCalledTimes(1);
    //     expect(messageMock.reply).toHaveBeenCalledWith(expectedOutput);
    // })

    test("Faltan argumentos", () => {
        const args = ["10:20", "10/12/2022"];
        const expectedOutput = "faltan argumentos";
        reminder.run(null, messageMock, args);
        expect(messageMock.reply).toHaveBeenCalledTimes(1);
        expect(messageMock.reply).toHaveBeenCalledWith(expectedOutput);
    })
})
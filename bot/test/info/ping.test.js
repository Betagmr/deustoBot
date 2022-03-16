const ping = require(`${process.cwd()}/commands/info/ping`)

describe("Test del comando ping", () => {
    const clientMock = {
        ws: {
            ping: jest.fn()
        }
    }

    const messageMock = {
        reply: jest.fn()
    }

    test("Se llama correctamente", () => {
        ping.run(clientMock, messageMock, null);
        expect(messageMock.reply).toHaveBeenCalledTimes(1);
        expect(messageMock.reply).toHaveBeenCalledTimes(1);
    })
})
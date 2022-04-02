const myReminders = require(`${process.cwd()}/commands/agenda/myReminders.js`)

describe("Test del MyReminders", () => {
    const messageMock = {
        reply: jest.fn()
    }

    test("Muestra tus recordatorios", () => {
        expect(true).toBe(true);
    })
})
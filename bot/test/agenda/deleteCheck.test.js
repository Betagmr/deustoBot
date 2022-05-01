const reminder = require('../../commands/agenda/deleteElement');

describe('Test del deleteElement', () => {
    const messageMock = {
        reply: jest.fn()
    };

    test('Faltan argumentos', () => {
        const args = ['prueba'];
        const expectedOutput = 'faltan argumentos';
        reminder.run(null, messageMock, args);
        expect(messageMock.reply).toHaveBeenCalledTimes(1);
        expect(messageMock.reply).toHaveBeenCalledWith(expectedOutput);
    });
})
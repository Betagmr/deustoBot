const reminder = require('../../commands/agenda/addChecklist.js');

describe('Test del addCheck', () => {
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

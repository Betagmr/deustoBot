const checkElement = require('../../commands/agenda/checkElement');

describe('Test del checkElement', () => {
    const messageMock = {
        reply: jest.fn()
    };

    test('Faltan argumentos', () => {
        const args = ['prueba'];
        const expectedOutput = 'faltan argumentos';
        checkElement.run(null, messageMock, args);
        expect(messageMock.reply).toHaveBeenCalledTimes(1);
        expect(messageMock.reply).toHaveBeenCalledWith(expectedOutput);
    });
})

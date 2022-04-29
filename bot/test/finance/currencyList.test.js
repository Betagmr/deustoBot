const currencyList = require(`${process.cwd()}/commands/finance/currencyList.js`);

describe('Test del currencyInfo', () => {
  const messageMock = {
    reply: jest.fn()
  };

  test('Faltan argumentos', () => {
    const args = [];
    const expectedOutput = 'No has puesto ninguna criptomoneda.';
    currencyList.run(null, messageMock, args);
    expect(messageMock.reply).toHaveBeenCalledTimes(1);
    expect(messageMock.reply).toHaveBeenCalledWith(expectedOutput);
  });
});
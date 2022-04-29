const deleteCurrency = require(`${process.cwd()}/commands/finance/deleteCurrency.js`);

describe('Test del currencyInfo', () => {
  const messageMock = {
    reply: jest.fn()
  };

  test('Faltan argumentos', () => {
    const args = [];
    const expectedOutput = 'No has puesto ninguna criptomoneda.';
    deleteCurrency.run(null, messageMock, args);
    expect(messageMock.reply).toHaveBeenCalledTimes(1);
    expect(messageMock.reply).toHaveBeenCalledWith(expectedOutput);
  });
});
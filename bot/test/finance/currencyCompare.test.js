const currencyCompare = require('../../commands/finance/currencyCompare.js');
const coinservices = require('../../services/coinservices.js');
const compareTemplate = require('../../templates/compareTemplate.js');
jest.mock('../../services/coinservices.js')
jest.mock('../../templates/coinTemplate.js')
jest.mock('axios');

describe('Test del currencyCompare', () => {
  const messageMock = {
    reply: jest.fn(),
    channel: {
      send: jest.fn()
    }
  };

  const getCriptoMock = (cripto) => coinservices.getCriptoCurrency.mockResolvedValueOnce(cripto);

  test('Faltan argumentos', () => {
    const args = [];
    const expectedOutput = 'No has introducido dos criptomonedas.';
    currencyCompare.run(null, messageMock, args);
    expect(messageMock.reply).toHaveBeenCalledTimes(1);
    expect(messageMock.reply).toHaveBeenCalledWith(expectedOutput);
  });

  test('La criptomoneda no ha sido encontrada', async () => {
    const args = ['asdasdasda', 'asdasdasdas'];
    const expectedOutput = 'No se ha encontrado tu criptomoneda.';
    getCriptoMock();

    await currencyCompare.run(null, messageMock, args);
    expect(messageMock.reply).toHaveBeenCalledTimes(1);
    expect(messageMock.reply).toHaveBeenCalledWith(expectedOutput);
  });
});
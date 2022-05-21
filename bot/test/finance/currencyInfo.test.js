const currencyInfo = require('../../commands/finance/currencyInfo.js');
const coinservices = require('../../services/coinservices.js');
const coinTemplate = require('../../templates/coinTemplate.js');
const axios = require('axios');
jest.mock('../../services/coinservices.js')
jest.mock('../../templates/coinTemplate.js')
jest.mock('axios');

describe('Test del currencyInfo', () => {
  const messageMock = {
    reply: jest.fn(),
    channel: {
      send: jest.fn()
    }
  };

  const getCriptoMock = (cripto) => coinservices.getCriptoCurrency.mockResolvedValueOnce(cripto);

  test('Faltan argumentos', () => {
    const args = [];
    const expectedOutput = 'No has puesto ninguna criptomoneda.';

    currencyInfo.run(null, messageMock, args);
    expect(messageMock.reply).toHaveBeenCalledTimes(1);
    expect(messageMock.reply).toHaveBeenCalledWith(expectedOutput);
  });

  test('La criptomoneda no ha sido encontrada', async () => {
    const args = ['asdasdasda'];
    const expectedOutput = 'No se ha encontrado tu criptomoneda.';
    getCriptoMock();

    await currencyInfo.run(null, messageMock, args);
    expect(messageMock.reply).toHaveBeenCalledTimes(1);
    expect(messageMock.reply).toHaveBeenCalledWith(expectedOutput);
  });

  test('Criptomoneda encontrada', async () => {
    const args = ['bitcoin'];
    const currency = args[0];
    const coin = getCriptoMock(currency);
    const expectedOutput = { embeds: [coinTemplate(coin)] };

    await currencyInfo.run(null, messageMock, args);
    expect(messageMock.channel.send).toHaveBeenCalledTimes(1);
    expect(messageMock.channel.send).toHaveBeenCalledWith(expectedOutput);
  });
});
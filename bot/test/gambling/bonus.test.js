const bonus = require(`../../commands/gambling/bonus`)
const bonusTemplate = require('../../templates/bonusTemplate');
const gamblingService = require('../../services/gamblingservice');

jest.mock('../../services/gamblingservice')

describe("Test de bonus", () => {
  const messageMock = {
    channel: {
      send: jest.fn()
    },
    author: {
      id: 'id'
    }
  }

  const getRewardedPlayersMock = (id) => gamblingService.getRewardedPlayers.mockResolvedValueOnce([{ userId: id }]);
  const getGamblingPlayerMock = (nCoins) => gamblingService.getGamblingPlayer.mockReturnValue({ coins: nCoins });
  
  test("no puede recibir el bonus", async () => {
    const id = 'id';
    const expectedOutput = { embeds: [bonusTemplate('Tienes que esperar hasta las 00:00 para solicitar de nuevo el bonus.')] };

    getRewardedPlayersMock(id);

    await bonus.run(null, messageMock, null);

    expect(messageMock.channel.send).toHaveBeenCalledTimes(1);
    expect(messageMock.channel.send).toHaveBeenCalledWith(expectedOutput);
  });

  test("puede recibir el bonus", async () => {
    const id = '';
    const cBonus = 1000;
    const coins = 200;
    const expectedOutput = { embeds: [bonusTemplate(`Se han añadido ${cBonus} monedas, ahora tienes ${coins + cBonus} monedas.`)] };

    getRewardedPlayersMock(id);
    getGamblingPlayerMock(coins);

    await bonus.run(null, messageMock, null);

    expect(messageMock.channel.send).toHaveBeenCalledTimes(1);
    expect(messageMock.channel.send).toHaveBeenCalledWith(expectedOutput);
  });
})
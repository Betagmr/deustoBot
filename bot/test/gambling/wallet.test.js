const wallet = require(`../../commands/gambling/wallet`)
const walletTemplate = require('../../templates/walletTemplate');
const gamblingService = require('../../services/gamblingservice');

jest.mock('../../services/gamblingservice')

describe("Test de wallet", () => {
  const messageMock = {
    channel: {
      send: jest.fn()
    },
    author: {
      id: 'id'
    }
  }
  
  test("ver la wallet", async () => {
    const coins = 100;
    const expectedOutput = { embeds: [walletTemplate(`Tienes: ${coins} monedas.`)] };

    gamblingService.getGamblingPlayer.mockReturnValue({ coins: coins });

    await wallet.run(null, messageMock, null);

    expect(messageMock.channel.send).toHaveBeenCalledTimes(1);
    expect(messageMock.channel.send).toHaveBeenCalledWith(expectedOutput);
  });
})
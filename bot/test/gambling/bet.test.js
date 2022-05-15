const bet = require(`../../commands/gambling/bet`)
const betTemplate = require('../../templates/betTemplate');
const gamblingService = require('../../services/gamblingservice');
const game = require('../../handlers/game');

jest.mock('../../services/gamblingservice');
jest.mock('../../handlers/game');

describe("Test de bet", () => {
  const messageMock = {
    reply: jest.fn(),
    channel: {
      send: jest.fn()
    },
    author: {
      id: ''
    }
  }

  const getGamblingPlayerMock = (nCoins) => gamblingService.getGamblingPlayer.mockResolvedValueOnce({ coins: nCoins });
  const gameMock = (isWinner) => game.win.mockReturnValue(isWinner);

  test("0 argumentos", () => {
    const args = [];
    const expectedOutput = "❌ No has introducido ningún valor, ni apuesta a ejecutar.";

    bet.run(null, messageMock, args);

    expect(messageMock.reply).toHaveBeenCalledTimes(1);
    expect(messageMock.reply).toHaveBeenCalledWith(expectedOutput);
  })

  test("1 argumento", () => {
    const args = ['up'];
    const expectedOutput = '❌ Selecciona la apuesta indicando: Up, Mid o Down.';

    bet.run(null, messageMock, args);

    expect(messageMock.reply).toHaveBeenCalledTimes(1);
    expect(messageMock.reply).toHaveBeenCalledWith(expectedOutput);
  })

  test("el primer argumento es un numero", () => {
    const args = ['up', 'up'];
    const expectedOutput = '❌ No has introducido un numero de monedas valido.';

    bet.run(null, messageMock, args);

    expect(messageMock.reply).toHaveBeenCalledTimes(1);
    expect(messageMock.reply).toHaveBeenCalledWith(expectedOutput);
  })

  test("no es una jugada valida", () => {
    const args = ['1', 'upper'];
    const expectedOutput = '❌ No has intrudocido una apuesta valida.';

    bet.run(null, messageMock, args);

    expect(messageMock.reply).toHaveBeenCalledTimes(1);
    expect(messageMock.reply).toHaveBeenCalledWith(expectedOutput);
  })

  test("no tienes suficinetes monedas", async () => {
    const args = ['1000', 'up'];
    const coins = 100;
    const expectedOutput = { embeds: [betTemplate('Apuesta', 'No tienes monedas suficientes.')] };

    getGamblingPlayerMock(coins);
    
    await bet.run(null, messageMock, args);

    expect(messageMock.reply).toHaveBeenCalledTimes(0);
    expect(messageMock.channel.send).toHaveBeenCalledTimes(1);
    expect(messageMock.channel.send).toHaveBeenCalledWith(expectedOutput);
  })

  test("juego ganado", async () => {
    const args = ['100', 'up'];
    const coins = 500;
    const expecteCoins = coins + +args[0]
    const expectedOutput = { embeds: [betTemplate('¡Ganaste!', `Ahora tienes ${expecteCoins}`)] };

    getGamblingPlayerMock(coins);
    gameMock(true);
    getGamblingPlayerMock(expecteCoins);

    await bet.run(null, messageMock, args);

    expect(messageMock.reply).toHaveBeenCalledTimes(0);
    expect(messageMock.channel.send).toHaveBeenCalledTimes(1);
    expect(messageMock.channel.send).toHaveBeenCalledWith(expectedOutput);
  })

  test("juego perdido", async () => {
    const args = ['100', 'up'];
    const coins = 500;
    const expecteCoins = coins - +args[0]
    const expectedOutput = { embeds: [betTemplate('Perdiste..', `Ahora tienes ${expecteCoins}`)] };

    getGamblingPlayerMock(coins);
    gameMock(false);
    getGamblingPlayerMock(expecteCoins);

    await bet.run(null, messageMock, args);

    expect(messageMock.reply).toHaveBeenCalledTimes(0);
    expect(messageMock.channel.send).toHaveBeenCalledTimes(1);
    expect(messageMock.channel.send).toHaveBeenCalledWith(expectedOutput);
  })
})
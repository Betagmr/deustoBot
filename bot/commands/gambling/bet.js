const gamblingService = require('../../services/gamblingservice');
const betTemplate = require('../../templates/betTemplate');
const game = require('../../handlers/game');
const { Client, Message } = require('discord.js');

/**
 * @module commands/gambling/bet
 */
module.exports = {
  name: 'bet',
  aliases: ['apostar'],
  desc: 'Crear una apuesta.',

  /**
   * Crear una apuesta.
   *  @param { Client } client
     * @param { Message } message
     * @param { Array } args [Cantidad, Apuesta]
     * @returns { Message } Mensaje de victoria, derrota o de monedas insuficientes
     */

  run: async (client, message, args) => {
    if (args.length < 1) return message.reply('❌ No has introducido ningún valor, ni apuesta a ejecutar.');
    if (args.length < 2) return message.reply('❌ Selecciona la apuesta indicando: Up, Mid o Down.');

    if (isNaN(args[0])) return message.reply('❌ No has introducido un numero de monedas valido.');
    if (!['up', 'down', 'mid'].includes(args[1])) return message.reply('❌ No has intrudocido una apuesta valida.');

    const bet = args[1];
    const betCoins = +args[0];

    const userId = message.author.id;
    await game.ensureUser(userId);

    const constUserData = await gamblingService.getGamblingPlayer(userId);
    const coins = constUserData.coins;

    if (coins > 0 && betCoins <= coins) {
      const solution = game.win(bet);
      const player = {
        userId: userId,
        coins: coins
      };
      await game.reward(player, bet, betCoins, solution);
      const newBalance = await gamblingService.getGamblingPlayer(userId);
      solution ? message.channel.send({ embeds: [betTemplate('¡Ganaste!', `Ahora tienes ${newBalance.coins}`)] }) :
        message.channel.send({ embeds: [betTemplate('Perdiste..',`Ahora tienes ${newBalance.coins}`)] });
    } else {
      return message.channel.send({ embeds: [betTemplate('Apuesta', 'No tienes monedas suficientes.')] });
    }
  }
};

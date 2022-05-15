const { Client, Message } = require('discord.js');
const game = require('../../handlers/game');
const gamblingService = require('../../services/gamblingservice');
const walletTemplate = require('../../templates/walletTemplate');

/**
 * @module commands/gambling/wallet
 */
module.exports = {
  name: 'wallet',
  aliases: ['wall'],
  desc: 'Ver cuantas monedas tiewnes para jugar',
  /**
   * Ver cuantas monedas tiewnes para jugar
   *  @param { Client } client
     * @param { Message } message
     * @param { Array } args []
     * @returns { Message } Muestra cuantas monedas tiene el usuario que hace la peticion
     */
  run: async (client, message, args) => {
    const userId = message.author.id;
    await game.ensureUser(userId);

    const userData = await gamblingService.getGamblingPlayer(userId);
    message.channel.send({ embeds: [walletTemplate(`Tienes: ${userData.coins} monedas.`)] });
  }
};
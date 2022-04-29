const { Client, Message } = require('discord.js');
const game = require('../../handlers/game');
const gamblingService = require('../../services/gamblingService');

module.exports = {
  name: 'wallet',
  aliases: ['wall'],
  desc: 'Ver cuantas monedas tiewnes para jugar',

  /**
     * @param { Client } client
     * @param { Message } message
     *
    */
  run: async (client, message, args) => {
    const userId = message.author.id;
    await game.ensureUser(userId);

    const userData = await gamblingService.getGamblingPlayer(userId);
    message.reply(`Tienes ${userData.coins} monedas para apostar.`);
  }
};
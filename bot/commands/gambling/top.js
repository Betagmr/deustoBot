const { Client, Message } = require('discord.js');
const gamblingService = require('../../services/gamblingservice');

/**
 * @module commands/gambling/top
 */
module.exports = {
  name: 'top',
  aliases: ['rank'],
  desc: 'Muestra el top 10 con mas dinero',
  /**
   * Muestra el top 10 con mas dinero
   *  @param { Client } client
     * @param { Message } message
     * @param { Array } args []
     * @returns { Message } El top 10 con más dinero
     */
  run: async (client, message, args) => {
    const guild = client.guilds.cache.get(message.guildId);
    const players = await gamblingService.getGamblingPlayers();
    const list = players
      .sort((a, b) => b.coins - a.coins)
      .map((e, i) => guild.members.fetch(e.userId));
    const out = await Promise.all(list);
    return message.reply(`** TOP PERSONAS CON MAS DINERO **\n${out
      .map((e, i) => `${i + 1}. ${e} - ${players[i].coins}`).join('\n')}`);
  }
};
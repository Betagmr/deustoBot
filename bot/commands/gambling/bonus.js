const { Client, Message } = require('discord.js');
const game = require('../../handlers/game');
const gamblingService = require('../../services/gamblingservice');
const bonusTemplate = require('../../templates/bonusTemplate');

/**
 * @module commands/gambling/bonus
 */
const reward = true;
const bonus = 1000;

module.exports = {
  name: 'bonus',
  aliases: ['bon'],
  desc: 'Recibir bonus diario',

  /**
   * Recibir bonus diario
   *  @param { Client } client
     * @param { Message } message
     * @param { Array } args []
     * @returns { Message } El bonus recibido
     */
  run: async (client, message, args) => {
    const userId = message.author.id;
    await game.ensureUser(userId);

    const rewardedPlayers = await gamblingService.getRewardedPlayers();
    const rewarded = rewardedPlayers.find(el => el.userId.includes(userId));
    if (rewarded) message.channel.send({ embeds: [bonusTemplate('Tienes que esperar hasta las 00:00 para solicitar de nuevo el bonus.')] });
    if (!rewarded) {
      const userData = await gamblingService.getGamblingPlayer(userId);
      const coins = userData.coins + bonus;
      await gamblingService.updateUserCoins({ userId, coins });
      await gamblingService.updateUserReward({ userId, reward });
      message.channel.send({ embeds: [bonusTemplate(`Se han añadido ${bonus} monedas, ahora tienes ${coins} monedas.`)] });
    }
  }
};
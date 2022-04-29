const { Client, Message } = require('discord.js');
const game = require('../../handlers/game');
const gamblingService = require('../../services/gamblingService');


const reward = true;
const bonus = 1000;


module.exports = {
    name: "bonus",
    aliases: ["bon"],
    desc: "Recibir bonus diario",

    /**
     * @param { Client } client
     * @param { Message } message
     * 
    */
    run: async (client, message, args) => {
        const userId = message.author.id;
        await game.ensureUser(userId);

        const rewardedPlayers = await gamblingService.getRewardedPlayers()
        const rewarded = rewardedPlayers.find(el => el.userId.includes(userId))

        if (rewarded) message.reply('Tienes que esperar hasta las 0:0:0 para solicitar de nuevo el bonus.');
        if (!rewarded) {
            const userData = await gamblingService.getGamblingPlayer(userId);
            const coins = userData.coins + 1000;
            await gamblingService.updateUserCoins({userId, coins})
            await gamblingService.updateUserReward({userId, reward})
            message.reply(`Has recibido el bonus de ${bonus} monedas.`)
        }
    }
};
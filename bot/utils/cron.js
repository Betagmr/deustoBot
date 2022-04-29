const CronJob = require('cron').CronJob;
const gamblingService = require('../services/gamblingService');

const resetRewardJob = new CronJob('0 0 0 * * *', async () => {
  const rewardedPlayers = await gamblingService.getRewardedPlayers();

  rewardedPlayers.forEach(async (el) => {
    const userId = el.userId;
    const reward = false;
    await gamblingService.updateUserReward({ userId, reward });
  });
});


module.exports = {
  resetRewardJob
};

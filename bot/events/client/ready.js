const cronUtil = require('../../handlers/cron');

module.exports = client => {
  console.log(`Sesion iniciada en ${client.user.tag}`.green);
  cronUtil.resetRewardJob.start();
};
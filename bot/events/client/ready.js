const cronUtil = require('../../handlers/cron');
const reminderService = require('../../services/agendaservice');

module.exports = client => {
  console.log(`Sesion iniciada en ${client.user.tag}`.green);
  cronUtil.resetRewardJob.start();
  setInterval(async () => {
    const date = new Date(); // today
    if (date.getHours() === 8 && date.getMinutes() === 0) {
    // Aqui haces la llamada y metes el message embed
      const reminders = await reminderService.getUpcomingReminders();
      const guild = client.guilds.cache.get('958110264014807090');

      reminders.forEach(async (rem) => {
        const member = await guild.members.fetch(rem.userId);
        member.send(rem.description);
      });

    }
  }, 59000);
};
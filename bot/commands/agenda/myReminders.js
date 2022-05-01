const reminderService = require('../../services/agendaservice');
const myRemindersTemplate = require('../../templates/myRemindersTemplate');

const recordStringer = (recordList) => {
  let string = '';
  for (const rem of recordList) {
    string += `**${rem.hour}** del **${rem.date}**, **${rem.description}**\n `;
  }
  return string;
};

module.exports = {
  name: 'myreminders',
  aliases: ['myrem', 'myrec', 'mr'],
  desc: 'Sirve para ver los recordatorios de los próximos 15 días',

  run: async (client, message, args) => {
    const reminders = await reminderService.getReminders(message.author.id);

    const record = reminders[0].description;
    // if(!reminders) return message.reply("no tienes ningun recordatorio")

    message.reply({ embeds: [myRemindersTemplate(recordStringer(reminders))] });
  }
};
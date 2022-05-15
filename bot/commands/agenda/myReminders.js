const reminderService = require('../../services/agendaservice');
const myRemindersTemplate = require('../../templates/myRemindersTemplate');

/**
 * @module commands/agenda/myReminders
 */

/**
 *
 * @param { array } recordList Lista de recordatorios a ordenar
 * @returns Recordatorios en orden en forma de string
 */
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
  /**
 *
 * @param { Client } client
 * @param { Message } message
 * @param { Array } args []
 * @returns { Message } Los recoradtorios del usuario que hace la peticion en orden
 */
  run: async (client, message, args) => {
    const reminders = await reminderService.getReminders(message.author.id);

    const record = reminders[0].description;
    // if(!reminders) return message.reply("no tienes ningun recordatorio")

    message.reply({ embeds: [myRemindersTemplate(recordStringer(reminders))] });
  }
};
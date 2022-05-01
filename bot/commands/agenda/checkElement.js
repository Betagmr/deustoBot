const reminderService = require('../../services/agendaService.js');

module.exports = {
  name: 'checkelement',
  aliases: ['check', 'cm'],
  desc: 'Sirve para checkear un elemento de una lista (nombre y elemento)',

  run: async (client, message, args) => {
    if (args.length < 2) return message.reply('faltan argumentos');

    const checklist = await reminderService.getChecklist(args[0]);

    const updateElement = checklist[args[1]-1];

    updateElement.isCheck = true;

    await reminderService.putChecklist(updateElement.id, updateElement);

    message.reply(`${checklist[args[1]-1].content} checkeado`);
  }
};
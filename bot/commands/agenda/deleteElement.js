const reminderService = require('../../services/agendaservice');

module.exports = {
  name: 'deleteelement',
  aliases: ['deletech', 'dcheck', 'deletecheck'],
  desc: 'Sirve para checkear un elemento de una lista (nombre y elemento)',

  run: async (client, message, args) => {
    if (args.length < 2) return message.reply('faltan argumentos');

    const checklist = await reminderService.getChecklist(args[0]);

    await reminderService.deleteChecklist(checklist[args[1]-1].id);

    message.reply(`${checklist[args[1]-1].content} borrado`);
  }
};
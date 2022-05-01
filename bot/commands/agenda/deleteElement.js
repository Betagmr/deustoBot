const reminderService = require('../../services/agendaservice');

module.exports = {
  name: 'deleteelement',
  aliases: ['deletech', 'dcheck', 'deletecheck'],
  desc: 'Sirve para checkear un elemento de una lista (nombre y elemento)',

  run: async (client, message, args) => {
    if (args.length < 2) return message.reply('❌ Faltan argumentos');
    if (args.length > 2) return message.reply('❌ Sobran argumentos');
    if (isNaN(args[1]) || args[1] === '' || args[1] <= 0) return message.reply('❌ No has introducido un numero valido.');

    const checklist = await reminderService.getChecklist(args[0]);
    if (checklist.length < args[1]) return message.reply('❌ Este elemento no esta en la checklist.');

    await reminderService.deleteChecklist(checklist[args[1]-1].id);
    message.reply(`${checklist[args[1]-1].content} borrado`);
  }
};
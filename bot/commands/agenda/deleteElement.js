const reminderService = require('../../services/agendaservice');
/**
 * @module commands/agenda/deleteElement
 */
module.exports = {
  name: 'deleteelement',
  aliases: ['deletech', 'dcheck', 'deletecheck'],
  desc: 'Sirve para eliminar un elemento de una lista (nombre y elemento)',
  /**
   * Sirve para eliminar un elemento de una lista
   * @param { Client } client
   * @param { Message} message
   * @param { Array } args [Nombre Checklist, Numero de elemento]
   * @returns { Message} Mensaje confirmacion de eliminacion
   */
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
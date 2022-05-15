const reminderService = require('../../services/agendaservice');
/**7
 * @module commands/agenda/checkElement
 */
module.exports = {
  name: 'checkelement',
  aliases: ['check', 'cm'],
  desc: 'Sirve para checkear un elemento de una lista (nombre y elemento)',
  /**
  *Sirve para checkear un elemento de una lista
  * @param { Client } client
  * @param { Message} message
  * @param { Array } args [NombreChecklist, NumeroElemento]
  * @returns { Message} Mensaje confirmacion del checkeo
  */
  run: async (client, message, args) => {
    if (args.length < 2) return message.reply('❌ Faltan argumentos');
    if (isNaN(args[1]) || args[1] === '' || args[1] <= 0) return message.reply('❌ No has introducido un numero valido.');

    const checklist = await reminderService.getChecklist(args[0]);

    if (checklist.length < args[1]) return message.reply('❌ No existe el elemento seleccionado');

    const updateElement = checklist[args[1]-1];

    updateElement.isCheck = true;

    await reminderService.putChecklist(updateElement.id, updateElement);

    message.reply(`${checklist[args[1]-1].content} checkeado`);
  }
};
const reminderService = require('../../services/agendaservice');
/**
 * @module commands/agenda/addChecklist
 */
module.exports = {
  name: 'addChecklist',
  aliases: ['addCheck', 'checklist', 'addch'],
  desc: 'Sirve para añadir un elemento a una checklist',
  /**
   *Sirve para añadir un elemento a una checklist
   * @param { Client } client
   * @param { Message} message
   * @param { Array } args [NombreChecklist, Elemento]
   * @returns { Message} Mensaje confirmacion de cracion de checklist
   */
  run: async (client, message, args) => {
    if (args.length < 2) return message.reply('❌ Faltan argumentos');
    const elemento = args.slice(1, args.length).join(' ');

    const checklist = {
      listName: args[0],
      userId: message.author.id,
      isCheck: false,
      content: elemento
    };

    await reminderService.postChecklist(checklist);

    message.reply('checklist creada!');
  }
};
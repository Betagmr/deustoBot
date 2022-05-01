const reminderService = require('../../services/agendaservice');

module.exports = {
  name: 'addChecklist',
  aliases: ['addCheck', 'checklist', 'addch'],
  desc: 'Sirve para añadir un elemento a una checklist',

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
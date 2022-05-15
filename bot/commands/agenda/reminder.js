const reminderService = require('../../services/agendaservice');
/**
 * @module commands/agenda/reminder
 */
module.exports = {
  name: 'reminder',
  aliases: ['recordatorio', 'rem', 'rec'],
  desc: 'Sirve para crear un recordatorio (Hora (HH:MM), dia, descripcion)',

  /**
   * Crear un recordatorio
   * @param { Client } client
   * @param { Message } message
   * @param { Array } args Hora (HH:MM), dia DD/MM/AAAA, descripcion
   */

  run: async (client, message, args) => {
    if(args.length < 3) return message.reply('faltan argumentos');
    const cont = args.slice(2, args.length).join(' ');

    const horaRegex = RegExp('[0-9]{2}:[0-9]{2}');
    if(!horaRegex.test(args[0])) return message.reply('la hora no ha sido introducida correctamente, use el formato HH:MM');

    const fechaRegex = RegExp('[0-9]{2}/[0-9]{2}/[0-9]{4}');
    if(!fechaRegex.test(args[1])) return message.reply('la fecha no ha sido introducida correctamente, use el formato DD/MM/AAAA');

    const objeto = {
      hour: args[0],
      date: args[1],
      description: cont,
      userId: message.author.id
    };

    await reminderService.postReminder(objeto);

    message.reply(`Se te será recordado a las **${args[0]}** del día **${args[1]}** que **${cont}**`);
  }
};
const scan = require('../../handlers/scanner');
const scanTemplate = require('../../templates/scanTemplate');
const reminderService = require('../../services/agendaservice');

/**
 * @module commands/scanner/scan
 */

module.exports = {
  name: 'scan',
  aliases: ['scan', 'ticket'],
  desc: 'Escanear precios de un ticket',

  /**
  * Mueve a un usuario al canal destino
  * @param { Client } client
  * @param { Message } message
  * @param { Array } args [Nombre ticket, Usuarios a pagar]
  * @returns { Message } Mensaje con precio de los productos y participantes
  */

  run: async (client, message, args) => {
    const [firstValue] = message.attachments.values();
    message.reply('Procesando la imagen...');
    try {
      await scan(firstValue.attachment);
    } catch (error) {
      return message.reply('❌ Introduce una imagen');
    }
    message.reply('Imagen Aprobada');
    if (args.length < 1) return message.reply('❌ Introduce un nombre para el ticket');
    const ticket = await scan(firstValue.attachment);

    const nombreTicket = args[0];
    console.log(args);
    const tarjets = args
      .slice(1, args.length)
      .filter(e => e.match(/<@[0-9]*>/)[0])
      .map(e => e.match(/[0-9]*/g)[2])
      .map(n => message.mentions.users.get(n));

    console.log(tarjets);
    const total = ticket.total;
    const precios = ticket.precioProductos.join('\n');

    message.reply({ embeds: [scanTemplate(nombreTicket, precios, total, tarjets)] });

    ticket.precioProductos.forEach(async (e, i) => {
      const ch = {
        listName: nombreTicket,
        content: `${e} - ${tarjets[i]}`,
        userId: message.author.id,
        isCheck: false,
      };
      await reminderService.postChecklist(ch);
    });
  }
};
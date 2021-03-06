const coinservices = require('../../services/coinservices.js');
const coinTemplate = require('../../templates/coinTemplate.js');

/**
 * @module commands/finance/deleteCurrency
 */
module.exports = {
  name: 'deleteCurrency',
  aliases: ['deleteCoin', 'dc'],
  desc: 'Eliminar criptomoneda de una lista de seguimiento',
  /**
   * Eliminar criptomoneda de una lista de seguimiento
   * @param { Client } client
   * @param { Message } message
   * @param { Array } args [Nombre de Moneda]
   * @returns { Message } Confirmacion de que la moneda ha sido borrada de la lista
   */
  run: async (client, message, args) => {
    if (args.length < 1) return message.reply('No has puesto ninguna criptomoneda.');
    const currency = await coinservices.getCriptoCurrency(args[0].toLowerCase());
    const list = await coinservices.getCriptoList(message.author.id);
    const coinTarjet = list.find(c => c.name = args[0]);
    if (!coinTarjet) return message.reply('La criptomoneda no está incluida en la lista.');
    const id = coinTarjet.id;
    if (!currency) return message.reply('No se ha encontrado tu criptomoneda.');
    message.channel.send({ embeds: [coinTemplate(currency)] });
    await coinservices.deleteCoin(id);

    message.reply(`${args[0]} ha sido borrado de tu lista.`);
  }
};
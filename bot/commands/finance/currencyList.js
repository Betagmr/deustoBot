const coinservices = require('../../services/coinservices.js');
const coinTemplate = require('../../templates/coinTemplate.js');

/**
 * @module commands/finance/currencyList
 */
module.exports = {
  name: 'currencyList',
  aliases: ['addcoin', 'addc'],
  desc: 'Añadir criptomoneda a una lista de seguimiento',
  /**
   * Añadir criptomoneda a una lista de seguimiento
   * @param { Client } client
   * @param { Message } message
   * @param { Array } args [Nombre de moneda]
   * @returns { Message } Confirmacion de que la moneda ha sido añadida a tu lista
   */
  run: async (client, message, args) => {
    if (args.length < 1) return message.reply('No has puesto ninguna criptomoneda.');
    const currency = await coinservices.getCriptoCurrency(args[0].toLowerCase());
    currency
      ? message.channel.send({ embeds: [coinTemplate(currency)] })
      : message.reply('No se ha encontrado tu criptomoneda.');

    const object = {
      userId: message.author.id,
      name: currency.id,
    };

    await coinservices.postCoin(object);

    message.reply(`${args[0]} ha sido añadido a tu lista.`);
  }
};
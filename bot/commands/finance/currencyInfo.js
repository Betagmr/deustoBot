const coinservices = require('../../services/coinservices.js');
const coinTemplate = require('../../templates/coinTemplate.js');

/**
 * @module commands/finance/currencyInfo
 */
module.exports = {
  name: 'currency',
  aliases: ['cy', 'crypto'],
  desc: 'Obtener informacion acerca de una crypto',
  /**
   * Obtener informacion acerca de una crypto
   * @param { Client } client
   * @param { Message } message
   * @param { Array } args [Nombre de Moneda]
   * @returns { Message } Informacion de la moneda
   */
  run: async (client, message, args) => {
    if(args.length < 1) return message.reply('No has puesto ninguna criptomoneda.');
    const currency = await coinservices.getCriptoCurrency(args[0].toLowerCase());
    currency
      ? message.channel.send({ embeds: [coinTemplate(currency)] })
      : message.reply('No se ha encontrado tu criptomoneda.');
  }
};
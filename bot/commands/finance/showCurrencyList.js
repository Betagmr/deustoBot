const coinservices = require('../../services/coinservices.js');
const coinTemplate = require('../../templates/coinTemplate.js');

/**
 * @module commands/finance/showCurrencyList
 */
module.exports = {
  name: 'showcurrencyList',
  aliases: ['scl', 'showcl'],
  desc: 'Comprobar lista de seguimiento',
  /**
   * Añadir criptomoneda a una lista de seguimiento
   * @param { Client } client
   * @param { Message } message
   * @returns { Message } Mostrar monedas pertenecientes a tu lista
   */
  run: async (client, message, args) => {
    const userId = message.author.id;
    const list = await coinservices.getCriptoList(userId);
    const currenciesPromise = list.map(e => coinservices.getCriptoCurrency(e.name.toLowerCase()));
    const resolve = await Promise.all(currenciesPromise);

    if(resolve.length > 0){
      resolve.forEach(e => {
        message.channel.send({ embeds: [coinTemplate(e)] });
      });
    }else{
      message.reply('❌ No tienes cryptos añadidas a la lista.');
    }
  }
};
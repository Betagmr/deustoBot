const coinservices = require('../../services/coinservices.js');
const compareTemplate = require('../../templates/compareTemplate.js');


module.exports = {
  name: 'currencyCompare',
  aliases: ['compare', 'comp'],
  desc: 'Comparar dos criptomonedas',
  run: async (client, message, args) => {
    if(args.length < 2) return message.reply('No has introducido dos criptomonedas.');
    const currency1 = await coinservices.getCriptoCurrency(args[0].toLowerCase());
    const currency2 = await coinservices.getCriptoCurrency(args[1].toLowerCase());
    currency1 && currency2
      ? message.channel.send({ embeds: [compareTemplate(currency1, currency2)] })
      : message.reply('No se ha encontrado tu criptomoneda.');
  }
};
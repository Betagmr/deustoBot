const coinservices = require(`${process.cwd()}/services/coinservices.js`);
const coinTemplate = require(`${process.cwd()}/templates/coinTemplate.js`);

module.exports = {
  name: 'currencyList',
  aliases: ['addcoin', 'addc'],
  desc: 'Añadir criptomoneda a una lista de seguimiento',
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
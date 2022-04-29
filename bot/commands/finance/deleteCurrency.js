const coinservices = require(`${process.cwd()}/services/coinservices.js`);
const coinTemplate = require(`${process.cwd()}/templates/coinTemplate.js`);

module.exports = {
  name: 'deleteCurrency',
  aliases: ['deleteCoin', 'dc'],
  desc: 'Eliminar criptomoneda de una lista de seguimiento',
  run: async (client, message, args) => {
    if (args.length < 1) return message.reply('No has puesto ninguna criptomoneda.');
    const currency = await coinservices.getCriptoCurrency(args[0].toLowerCase());
    const list = await coinservices.getCriptoList(message.author.id);
    const coinTarjet = list.find(c => c.name = args[0]);
    if(!coinTarjet)return message.reply('La criptomoneda no está incluida en la lista.');
    const id = coinTarjet.id;
    currency
      ? message.channel.send({ embeds: [coinTemplate(currency)] })
      : message.reply('No se ha encontrado tu criptomoneda.');

    await coinservices.deleteCoin(id);

    message.reply(`${args[0]} ha sido borrado de tu lista.`);
  }
};
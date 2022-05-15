const { MessageEmbed } = require('discord.js');

// inside a command, event listener, etc.

const scanTemplate = (nombre, productos, total, tarjets) => {
  const embed = new MessageEmbed()
    .setColor('#0099ff')
    .setTitle(nombre)
    .setDescription(`El total es: ${total} \n Los precios son: \n ${productos} \n Los participantes a pagar son: \n ${tarjets.join('\n')} `)
    .setFooter({ text: 'Realizado por EDD.' });

  return embed;
};

module.exports = scanTemplate;
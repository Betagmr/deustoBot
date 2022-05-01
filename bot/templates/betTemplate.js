const { MessageEmbed } = require('discord.js');

// inside a command, event listener, etc.

const betTemplate = (resultado, text) => {
  const embed = new MessageEmbed()
    .setColor('#0099ff')
    .setTitle(resultado)
    .setDescription(text)
    .setFooter({ text: 'Juego realizado por EDD.' });

  return embed;
};

module.exports = betTemplate;
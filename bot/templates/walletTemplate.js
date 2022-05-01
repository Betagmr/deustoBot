const { MessageEmbed } = require('discord.js');

// inside a command, event listener, etc.

const walletTemplate = (text) => {
  const embed = new MessageEmbed()
    .setColor('#0099ff')
    .setTitle('Cartera')
    .setDescription(text);

  return embed;
};

module.exports = walletTemplate;
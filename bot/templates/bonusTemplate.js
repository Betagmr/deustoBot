const { MessageEmbed } = require('discord.js');

// inside a command, event listener, etc.

const bonusTemplate = (text) => {
  const embed = new MessageEmbed()
    .setColor('#0099ff')
    .setTitle('Bonus')
    .setDescription(text);

  return embed;
};

module.exports = bonusTemplate;
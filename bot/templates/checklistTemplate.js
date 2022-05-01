const { MessageEmbed } = require('discord.js');

// inside a command, event listener, etc.

const myChecklistTemplate = (cehcklistName, elements) => {
  const embed = new MessageEmbed()
    .setColor('#ffa04d')
    .setTitle(cehcklistName)
    .setDescription(elements)
    .setTimestamp();

  return embed;
};

module.exports = myChecklistTemplate;
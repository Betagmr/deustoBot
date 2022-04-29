const { MessageEmbed } = require('discord.js');

// inside a command, event listener, etc.

const myRemindersTemplate = (reminders) => {
  const embed = new MessageEmbed()
    .setColor('#fcba03')
    .setTitle('***Recordatorios:***')
    .setDescription(reminders)
    .setTimestamp();

  return embed;
};

module.exports = myRemindersTemplate;
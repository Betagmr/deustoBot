const { Client, Message } = require('discord.js');

module.exports = {
  name: 'mute',
  aliases: [],
  desc: 'Sirve para mutear un usuario',
  /**
     * @param { Client } client
     * @param { Message } message
    */
  run: async (client, message, args) => {
    const target = message.mentions.users.first();
    const mutedRoleid = message.guild.roles.cache.find(r => r.name === 'mute').id;
    const guild = client.guilds.cache.get(message.guildId);
    const member = await guild.members.fetch(target.id);

    member.roles.add(mutedRoleid);
    setTimeout(() => {
      member.roles.remove(mutedRoleid); // remove the role
      message.channel.send(`El tiempo de muteo de ${target} ha expirado`);
    }, Number(args[1]) * 1000);

    message.reply(`Silenciado el usuario ${target}`);
  }
};
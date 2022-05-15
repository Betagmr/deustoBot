const { Client, Message } = require('discord.js');
/**
* @module commands/admin/moveAll
*/
module.exports = {
  name: 'moveall',
  aliases: ['moveAll', 'ma'],
  desc: 'Mueve a todos los usuarios del server a un canal',

  /**
    *Mueve a todos los usuarios del server a un canal
    * @param { Client } client
    * @param { Message } message
    * @param { Array } args [Canal]
    * @returns { Message } Mensaje de confirmación del movimiento
    */
  run: async (client, message, args) => {
    if (args.length < 1) return message.reply('No has introducido ningun canal');

    const guild = client.guilds.cache.get(message.guildId);
    const fillChannels = client.channels.cache.filter(c => c.isVoice()).filter(c => c.members.size);
    const targetChannel = client.channels.cache.find(channel => channel.name.toLowerCase().includes(args[0].toLowerCase()));
    const usersId = [];

    fillChannels.forEach(ch => {
      ch.members.forEach(m => {
        usersId.push(m.id);
      });
    });

    const discordUser = guild.members.cache.filter(member => usersId.includes(member.id));
    discordUser.forEach(member => {
      member.voice.setChannel(targetChannel);
    });

    message.reply(`**${usersId.length}** usuarios han sido movidos a la sala ${targetChannel}`);
  }
};
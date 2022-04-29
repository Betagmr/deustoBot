module.exports = {
  name: 'play',
  aliases: ['p'],
  desc: 'Sirve para reproducir una cancion',
  run: (client, message, args) => {
    if (!args.length) return message.reply('Tienes que especificar el nombre de una cancion.');
    if (!message.member.voice?.channelId) return message.reply('Tienes que estar en un canal de voz.');
    if (message.guild.me.voice?.channelId && message.member.voice?.channelId !== message.guild.me.voice?.channelId)
      return message.reply('Canal de voz distinto al destino');

    const channel = message.guild.channels.cache.find(c => c.id === message.member.voice?.channelId);
    client.distube.play(channel, args.join(' '), {
      member: message.member,
      textChannel: channel,
      message
    });
    message.reply(`Buscando ${args.join(' ')}...`);
  }
};
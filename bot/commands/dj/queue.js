module.exports = {
  name: 'queue',
  aliases: ['list'],
  desc: 'Sirve para ver la lista de canciones del bot',
  run: (client, message, args) => {
    const queue = client.distube.getQueue(message);
    if (!queue) return message.reply('No hay ninguna cancion reproduciendose');
    if (!message.member.voice?.channelId) return message.reply('Tienes que estar en un canal de voz.');
    if (message.guild.me.voice?.channelId && message.member.voice?.channelId !== message.guild.me.voice?.channelId)
      return message.reply('Canal de voz distinto al destino');

    const queueList = [];
    for (let i = 0; i < queue.songs.length; i += 10) {
      const songs = queue.songs.slice(i, i + 10);
      queueList.push(songs.map((song, index) => `${i + index + 1} - ${song.name}`));
    }

    return args[0] && args[0] <= queueList.length
      ? message.reply(queueList[args[0]].join('\n'))
      : message.reply(queueList[0].join('\n'));
  }
};
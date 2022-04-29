module.exports = {
  name: "skip",
  aliases: ["saltar"],
  desc: "Sirve para saltar una cancion",
  run: (client, message, args) => {
    const queue = client.distube.getQueue(message);
    if (!queue) return message.reply('No hay ninguna cancion reproduciendose');
    if (!message.member.voice?.channelId) return message.reply('Tienes que estar en un canal de voz.');
    if (message.guild.me.voice?.channelId && message.member.voice?.channelId != message.guild.me.voice?.channelId)
      return message.reply("Canal de voz distinto al destino");

    client.distube.skip(message);
  }
}
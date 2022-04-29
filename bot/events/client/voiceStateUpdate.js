const { Collection } = require('discord.js');
const voiceCollection = new Collection();

module.exports = async (oldstate, newstate) => {
  if (!oldstate.channelId && newstate.channelId) {
    if (newstate.channelId === '959897489681575976') {
      newstate.guild.channels.create(`Sala de ${newstate.member.user.username}`, {
        type: 'GUILD_VOICE',
        parent: newstate.channel.parent
      }).then((channel) => {
        newstate.member.voice.setChannel(channel);
        voiceCollection.set(newstate.member.user.id, channel.id);
      });
    }
  }
};

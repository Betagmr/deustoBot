const { DisTube } = require('distube');

/**
 * Modulo de gestion de musica
 * @module handlers/distube
 * @param {Client} client Cliente Discord
 */
module.exports = (client) => {
  client.distube = new DisTube(client, {
    emitNewSongOnly: false,
    leaveOnEmpty: true,
    leaveOnFinish: true,
    leaveOnStop: true,
    savePreviousSongs: true,
    emitAddSongWhenCreatingQueue: false,
    searchSongs: 0,
    nsfw: false,
    emptyCooldown: 25,
    ytdlOptions: {
      highWaterMark: 1024 * 1024 * 64,
      quality: 'highestaudio',
      format: 'audioonly',
      liveBuffer: 60000,
      dlChunkSize: 1024 * 1024 * 4,
    },
    youtubeDL: false,
  });

  /** Activa la opcion de Autoplay */
  client.distube.on('initQueue', queue => {
    queue.autoplay = true;
  });

};
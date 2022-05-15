/**
 * @module commands/info/ping
 */
module.exports = {
  name: 'ping',
  aliases: ['latencia', 'ms'],
  desc: 'Sirve para ver la latencia del Bot',
  /**
   *
   * @param { Client } client
   * @param { Message } message
   * @param { Array } args []
   * @returns { Message } Mensaje de cuanto tarda en contestar
   */
  run: (client, message, args) => {
    message.reply(`Pong! El ping del Bot es de \`${client.ws.ping}ms\``);
  }
};
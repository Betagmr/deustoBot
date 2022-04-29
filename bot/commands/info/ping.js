module.exports = {
  name: 'ping',
  aliases: ['latencia', 'ms'],
  desc: 'Sirve para ver la latencia del Bot',
  run: (client, message, args) => {
    message.reply(`Pong! El ping del Bot es de \`${client.ws.ping}ms\``);
  }
};
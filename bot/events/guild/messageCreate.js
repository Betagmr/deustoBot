const config = require('../../settings/config');

module.exports = async (client, message) => {
  if (!message.guild || !message.channel || message.author.bot) return;
  if (!message.content.startsWith(config.PREFIX)) return;
  const args = message.content.slice(config.PREFIX.length).trim().split(' ');
  const cmd = args.shift()?.toLowerCase();
  const command = client.commands.get(cmd) || client.commands.find(c => c.aliases && c.aliases.includes(cmd));

  if (command) {
    //ejecutar el comando
    command.run(client, message, args);
  } else {
    //opcional
    return message.reply('❌ No he encontrado el comando que me has especificado!');
  }
};
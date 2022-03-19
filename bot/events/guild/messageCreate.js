const config = require(`${process.cwd()}\\settings\\config.json`);

module.exports = async (client, message) => {
    if (!message.guild || !message.channel || message.author.bot) return;
    if (!message.content.startsWith(config.prefix)) return;
    const args = message.content.slice(config.prefix.length).trim().split(" ");
    const cmd = args.shift()?.toLowerCase();
    const command = client.commands.get(cmd) || client.commands.find(c => c.aliases && c.aliases.includes(cmd));

    if (command) {
        //ejecutar el comando
        command.run(client, message, args);
    } else {
        //opcional
        return message.reply("❌ No he encontrado el comando que me has especificado!");
    }
}
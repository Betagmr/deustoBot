const { Client, Message } = require('discord.js')

module.exports = {
    name: "move",
    aliases: ["m"],
    desc: "Mueve a un canalas a los n usuarios mencionados",

    /**
     * @param { Client } client
     * @param { Message } message
     * 
    */
    run: async (client, message, args) => {
        if (args.length < 1) return message.reply("No has introducido ningun canal")
        if (args.length < 2) return message.reply("No has introducido ningun Usuario")
        const targetChannel = client.channels.cache.find(channel => channel.name.toLowerCase().includes(args[0].toLowerCase()));
        if (!targetChannel) return message.reply("No has introducido un canal valido")

        const guild = client.guilds.cache.get(message.guildId);
        const usersId = message.mentions.users.map(user => user.id)
        const discordUser = guild.members.cache.filter(member => usersId.includes(member.id));
        discordUser.forEach(member => {
            member.voice.setChannel(targetChannel)
        });

        message.reply(`**${usersId.length}** usuarios han sido movidos a la sala ${targetChannel}`)
    }
}
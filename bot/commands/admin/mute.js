const { Client, Message } = require('discord.js')

module.exports = {
    name: "mute",
    aliases: [],
    desc: "Sirve para mutear un usuario",
    /**
     * @param { Client } client
     * @param { Message } message
     * 
    */
    run: async (client, message, args) => {
        const target = message.mentions.users.first();
        const mutedRoleid = message.guild.roles.cache.find(r => r.name === 'mute').id;

        const guild = client.guilds.cache.get('669565700049993740');
        const member = await guild.members.fetch(target.id)
        const role = await guild.roles.fetch(mutedRoleid)

        console.log(message.member.voice.channel.members.size);
        member.roles.add(role)

        setTimeout(() => {
            member.roles.remove(mutedRoleid); // remove the role
            message.channel.send(`El tiempo de muteo de ${target} ha expirado`)
        }, Number(args[0]) * 1000)

        message.reply(`Silenciado el usuario ${target}`)
    }
}
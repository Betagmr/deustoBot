module.exports = {
    name: "reminder",
    aliases: ["recordatorio", "rem", "rec"],
    desc: "Sirve para crear un recordatorio (Hora (HH:MM), dia, descripcion)",
    run: (client, message, args) => {
        if(args.length < 3) return message.reply("faltan argumentos")
        const cont = args.slice(2, args.length).join(" ")
        message.reply(`Se te será recordado a las **${args[0]}** del día **${args[1]}** que **${cont}**`)

        const objeto = {
            hour: args[0],
            day: args[1],
            description: cont
        }
    }
}
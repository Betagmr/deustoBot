const reminderService = require(`${process.cwd()}\\services\\agendaService.js`)

module.exports = {
    name: "reminder",
    aliases: ["recordatorio", "rem", "rec"],
    desc: "Sirve para crear un recordatorio (Hora (HH:MM), dia, descripcion)",
   
    run: async (client, message, args) => {
        if(args.length < 3) return message.reply("faltan argumentos")
        const cont = args.slice(2, args.length).join(" ")
        
        

        const objeto = {
            hour: args[0],
            date: args[1],
            description: cont,
            userId: message.author.id
        }
        // await reminderService.postReminder(objeto)

        message.reply(`Se te será recordado a las **${args[0]}** del día **${args[1]}** que **${cont}**`)
    }
}
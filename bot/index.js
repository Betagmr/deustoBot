const Discord = require('discord.js');
const cronUtil = require('./utils/cron');
const config = require("./settings/config");
require('colors');

const client = new Discord.Client({
    partials: ["MESSAGE", "CHANNEL", "REACTION"],
    intents: [
        Discord.Intents.FLAGS.GUILDS,
        Discord.Intents.FLAGS.GUILD_MEMBERS,
        Discord.Intents.FLAGS.GUILD_MESSAGES,
        Discord.Intents.FLAGS.GUILD_VOICE_STATES
    ],
});

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();

function requerirhandlers() {
    ["command", "events", "distube"].forEach(handler => {
        try {
            require(`./handlers/${handler}`)(client, Discord)
        } catch (e) {
            console.warn(e)
        }
    })
}

requerirhandlers();
cronUtil.resetRewardJob.start()

client.login(config.TOKEN)
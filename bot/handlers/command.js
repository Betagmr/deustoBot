const fs = require('fs');

module.exports = (client) => {
  try {
    console.log('Cargando los comandos...'.yellow);
    let nComands = 0;
    fs.readdirSync('./commands/').forEach((folder) => {
      const commands = fs.readdirSync(`./commands/${folder}`).filter((file) => file.endsWith('.js'));
      for (let file of commands) {
        let comand = require(`../commands/${folder}/${file}`);
        if (comand.name) {
          client.commands.set(comand.name, comand);
          nComands++;
          if (comand.aliases && Array.isArray(comand.aliases)) {
            comand.aliases.forEach((alias) => client.aliases.set(alias, comand.name));
          }
        } else {
          console.log(`COMANDO [/${folder}/${file}]`, 'error => el comando no está configurado'.brightRed);
        }
      }
    });
    console.log(`${nComands} Comandos Cargados`.brightGreen);
  } catch (e) {
    console.log(e);
  }
};
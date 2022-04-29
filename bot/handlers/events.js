const fs = require('fs');

module.exports = async (client) => {
  try {
    console.log('Cargando los eventos...'.yellow);
    let nEvent = 0;
    ['client', 'guild'].forEach((dir) => {
      const eventFiles = fs.readdirSync(`./events/${dir}`).filter((file) => file.endsWith('.js'));
      for (const file of eventFiles) {
        try {
          const event = require(`../events/${dir}/${file}`);
          const eventName = file.split('.')[0];
          client.on(eventName, event.bind(null, client));
          nEvent++;
        } catch (e) {
          console.log(e);
        }
      }
    });
    console.log(`${nEvent} Eventos Cargados`.brightGreen);
    try { console.log('Iniciando Sesión el Bot...'.yellow); } catch (e) { console.log(e); }
  } catch (e) {
    console.log(e.bgRed);
  }
};
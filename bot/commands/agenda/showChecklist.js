const reminderService = require('../../services/agendaservice');
const myChecklistTemplate = require('../../templates/checklistTemplate');

const recordStringer = (checklist) => {
  let string = '';
  let n = 1;
  for (const check of checklist) {
    if(check.isCheck === false){
      string += `**${n}**. **${check.content}**\n `;
    }
    if(check.isCheck === true){
      string += `**${n}**. ~~**${check.content}**~~\n `;
    }
    n++;
  }
  return string;
};

module.exports = {
  name: 'showchecklist',
  aliases: ['showch', 'showc', 'checkcheck'],
  desc: 'Sirve para visualizar una lista',

  run: async (client, message, args) => {
    if (args.length < 1) return message.reply('❌ Faltan argumentos.');
    const checklist = await reminderService.getChecklist(args[0]);

    message.reply({ embeds: [myChecklistTemplate(args[0], recordStringer(checklist))] });
  }
};
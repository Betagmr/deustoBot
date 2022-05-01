const reminderService = require('../../services/agendaservice');
const myChecklistTemplate = require('../../templates/checklistTemplate');

const recordStringer = (checklist) => {
  let string = '';
  let n = 1;
  for (const check of checklist) {
    if(check.isCheck === false){
      string += `**${n}**. **${check.content}**\n `;
      n++;
    }
    if(check.isCheck === true){
      string += `**${n}**. ~~**${check.contetn}**~~\n `;
      n++;
    }
  }
  return string;
};

module.exports = {
  name: 'showChecklist',
  aliases: ['showCh', 'showc', 'checkcheck'],
  desc: 'Sirve para visualizar una lista',

  run: async (client, message, args) => {
    const checklist = await reminderService.getChecklist(args[0]);

    message.reply({ embeds: [myChecklistTemplate(args[0], recordStringer(checklist))] });
  }
};
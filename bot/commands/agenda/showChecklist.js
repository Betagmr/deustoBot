const reminderService = require('../../services/agendaservice');
const myChecklistTemplate = require('../../templates/checklistTemplate');
/**
 * @module commands/agenda/showChecklist
 */

/**
 *
 * @param { array } recordList Lista de elementos de checklist a ordenar
 * @returns Elementos de checklist en orden en forma de string
 */
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
  /**
 *
 * @param { Client } client
 * @param { Message } message
 * @param { Array } args [NombreChecklist]
 * @returns { Message } Los elementos de una checklist del usuario que hace la peticion en orden
 */
  run: async (client, message, args) => {
    if (args.length < 1) return message.reply('❌ Faltan argumentos.');
    const checklist = await reminderService.getChecklist(args[0]);

    message.reply({ embeds: [myChecklistTemplate(args[0], recordStringer(checklist))] });
  }
};
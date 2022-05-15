const mongoose = require('mongoose');

/**
 * MongoDB Checklist Schema
 * @constructor checklistSchema
 * @param {String} listName Nombre de la lista
 * @param {String} userId Id del usuario
 * @param {Boolean} isCheck Selecionado
 * @param {String} content Contenido de la lista
 * @returns {mongoose.model} checklistSchema
 */
const checklistSchema = new mongoose.Schema({
  listName: {
    type: String,
    required: true,
  },
  userId: {
    type: String,
    required: true,
  },
  isCheck: {
    type: Boolean,
    require: true,
    default: false
  },
  content: {
    type: String,
    require: false
  }
});

checklistSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

module.exports = mongoose.model('Checklist', checklistSchema);
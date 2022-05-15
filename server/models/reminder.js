const mongoose = require('mongoose');

/**
 * MongoDB Reminder Schema
 * @constructor reminderSchema
 * @param {String} hour Hora del evento
 * @param {Boolean} date Dia del evento
 * @param {String} description Descripcion del recordatorio
 * @param {String} userId Id del usuario
 * @returns {mongoose.model} reminderSchema
 */
const reminderSchema = new mongoose.Schema({
  hour: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  userId: {
    type: String,
    required: true,
  }
});

reminderSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  }
});

module.exports = mongoose.model('Reminder', reminderSchema);
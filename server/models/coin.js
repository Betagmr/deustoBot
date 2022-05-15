const mongoose = require('mongoose');

/**
 * MongoDB Coin Schema
 * @constructor coinSchema
 * @param {String} userId Id del usuario
 * @param {String} name Nombre de la moneda
 * @returns {mongoose.model} coinSchema
 */
const coinSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  }
});

coinSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

module.exports = mongoose.model('Coin', coinSchema);

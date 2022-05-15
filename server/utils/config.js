require('dotenv').config();
/**
 * @module utils/config
 */

/**
 * Puerto donde esta alojada la API
 * @type {String}
 */
const PORT = process.env.PORT;

/**
 * URI de la BD
 * @type {String}
 */
const MONGODB_URI = process.env.NODE_ENV === 'development' || process.env.NODE_ENV === 'test'
  ? process.env.TEST_MONGODB_URI
  : process.env.MONGODB_URI;

/**
 * Contiene las rutas de las diferentes APIs
 * @type {Object}
 */
const ROUTES = {
  remainder_url: '/api/reminder',
  coin_url: '/api/coin',
  gambling_url: '/api/gambling',
  checklist_url: '/api/checklist'
};

module.exports = {
  MONGODB_URI,
  PORT,
  ROUTES,
};

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
 * Objeto que contine las diferentes URIs de MongoDB
 * @type {Object}
 */
const MONGODB_URIs = {
  production: process.env.MONGODB_URI,
  development: process.env.DEV_MONGODB_URI,
  test: process.env.TEST_MONGODB_URI
};


/**
 * URI de la BD
 * @type {String}
 */
const MONGODB_URI = MONGODB_URIs[process.env.NODE_ENV];

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

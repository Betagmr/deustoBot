require('colors');
/**
 * @module utils/logger
 */

/**
 * Imprime en consola en formato info
 * @param {...any} params Parametros a printear
 */
const info = (...params) => {
  console.log(...params);
};

/**
 * Imprime en consola en formato error
 * @param  {...any} params Parametros a printear
 */
const error = (...params) => {
  console.error(...params);
};

module.exports = {
  info,
  error,
};

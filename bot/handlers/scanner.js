const T = require('tesseract.js');

/**
 * Carga automaticamente todos los eventos
 * @module handlers/scanner
 * @param {Url} url Url de la imagen a escanear
*/

module.exports = async (url) => {
  const regex = /[+-]?\d+(,\d+|\.\d+)/g;

  const promise = await T.recognize(
    url,
    'eng');

  console.log(promise.data.text);
  const elementos = promise.data.text
    .split('\n')
    .map(el => el.match(regex))
    .filter(el => el !== null)
    .map(el => (el?.length > 1) ? el[el.length - 1] : el[0])
    .map(el => +el.replace(',', '.'));

  const total = elementos.reduce((acc, el) => (el > acc) ? el : acc, 0);
  const arrayLength = elementos.findIndex(el => el === total);
  const precioProductos = elementos.slice(0, arrayLength);

  const ticket = {
    total,
    precioProductos
  };

  return ticket;
};
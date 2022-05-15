const logger = require('./logger');
/**
 * @module utils/middleware
 */

/**
 * Loggear la información de la peteción
 * @param {Request} request HTTP request
 * @param {Response} response HTTP response
 * @param {Function} next Siguiente funcion
 */
const requestLogger = (request, response, next) => {
  logger.info('Method:', request.method);
  logger.info('Path:  ', request.path);
  logger.info('Body:  ', request.body);
  logger.info('---');
  next();
};

/**
 * Controla si la ruta a la que se accede existe
 * @param {Request} request HTTP request
 * @param {Response} response HTTP response
 */
const unknownEndpoint = (request, response) => {
  response.status(404).send({ error: 'unknown endpoint' });
};

/**
 * Paramatrizar los posibles errores en la peticiones HTTP
 * @param {Error} error Error capturado
 * @param {Request} request HTTP request de la peteción
 * @param {Response} response HTTP response de la peteción
 * @param {Function} next Siguiente funcion
 * @returns {response.status} Codigo HTTP del error
 */
const errorHandler = (error, request, response, next) => {
  logger.error(error.message);

  if (error.name === 'CastError') {
    return response.status(400).send({ error: 'malformatted id' });
  } else if (error.name === 'ValidationError') {
    return response.status(400).json({ error: error.message });
  }

  next(error);
};

module.exports = {
  requestLogger,
  unknownEndpoint,
  errorHandler,
};

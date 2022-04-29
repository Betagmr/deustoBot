const helpRouter = require('express').Router();
const config = require('../utils/config');

helpRouter.get('/', (request, response) => {
  response.json(config.ROUTES);
});

module.exports = helpRouter;
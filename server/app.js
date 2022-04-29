const express = require('express');
const app = express();
const cors = require('cors');

const config = require('./utils/config');
const logger = require('./utils/logger');
const middleware = require('./utils/middleware');
const mongoose = require('mongoose');

const helpRouter = require('./routes/helpController');
const reminderRouter = require('./routes/reminderController');
const coinRouter = require('./routes/coinController');
const gamblingRouter = require('./routes/gamblingController');
const checklistRouter = require('./routes/checklistController');

// Database conection
mongoose
  .connect(config.MONGODB_URI)
  .then(() => logger.info('Connected to MongoDB'))
  .catch((err) => logger.error('Error conecting to MongoDB: ' + err.message));

app.use(cors());
app.use(express.static('build'));
app.use(express.json());
app.use(middleware.requestLogger);

app.use('/', helpRouter);
app.use(config.ROUTES.remainder_url, reminderRouter);
app.use(config.ROUTES.coin_url, coinRouter);
app.use(config.ROUTES.gambling_url, gamblingRouter);
app.use(config.ROUTES.checklist_url, checklistRouter);

app.use(middleware.unknownEndpoint);
app.use(middleware.errorHandler);

module.exports = app;

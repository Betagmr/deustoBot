const reminderRouter = require('express').Router();
const Reminder = require('../models/reminder');

reminderRouter.get('/', (request, response) => {
  Reminder.find({}).then(reminder => {
    response.json(reminder);
  });
});

reminderRouter.post('/', (request, response, next) => {
  const body = request.body;

  const reminder = new Reminder({
    hour: body.hour,
    date: body.date,
    description: body.description,
    userId: body.userId
  });

  reminder.save()
    .then(savedReminder => {
      response.json(savedReminder);
    })
    .catch(error => next(error));
});

reminderRouter.delete('/:id', (request, response, next) => {
  Reminder.findByIdAndRemove(request.params.id)
    .then(() => {
      response.status(204).end();
    })
    .catch(error => next(error));
});

module.exports = reminderRouter;
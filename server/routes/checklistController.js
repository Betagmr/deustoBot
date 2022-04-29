const checklistRouter = require('express').Router();
const Checklist = require('../models/checklist');

checklistRouter.get('/', (request, response) => {
  Checklist.find({}).then(checklist => {
    response.json(checklist);
  });
});

checklistRouter.post('/', (request, response, next) => {
  const body = request.body;

  const checklist = new Checklist({
    listName: body.listName,
    userId: body.userId,
    isCheck: body.isCheck,
    content: body.content
  });

  checklist.save()
    .then(savedChecklist => {
      response.json(savedChecklist);
    })
    .catch(error => next(error));
});

checklistRouter.delete('/:id', (request, response, next) => {
  Checklist.findByIdAndRemove(request.params.id)
    .then(() => {
      response.status(204).end();
    })
    .catch(error => next(error));
});

checklistRouter.put('/:id', (request, response, next) => {
  const body = request.body;

  const checklist = {
    isCheck: body.isCheck,
    content: body.content
  };

  Checklist.findByIdAndUpdate(request.params.id, checklist, { new: true })
    .then(updatedChecklist => {
      response.json(updatedChecklist);
    })
    .catch(error => next(error));
});

module.exports = checklistRouter;
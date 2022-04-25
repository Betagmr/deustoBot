const gamblingRouter = require('express').Router()
const Gambling = require('../models/gambling')

gamblingRouter.get('/', (request, response) => {
    Gambling.find({}).then(gambling => {
        response.json(gambling)
    })
})

gamblingRouter.post('/', (request, response, next) => {
    const body = request.body

    const gambling = new Gambling({
        userId: body.userId,
        coins: body.coins,
    })

    gambling.save()
        .then(savedGambling => {
            response.json(savedGambling)
        })
        .catch(error => next(error))
})

gamblingRouter.delete('/:id', (request, response, next) => {
    Gambling.findByIdAndRemove(request.params.id)
        .then(() => {
            response.status(204).end()
        })
        .catch(error => next(error))
})

gamblingRouter.put('/:id', (request, response, next) => {
    const body = request.body
  
    const gambling = {
        coins: body.coins
    }
  
    Gambling.findByIdAndUpdate(request.params.id, gambling, { new: true })
      .then(updatedGambling => {
        response.json(updatedGambling)
      })
      .catch(error => next(error))
  })

module.exports = gamblingRouter
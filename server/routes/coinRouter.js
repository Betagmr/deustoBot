const coinRouter = require('express').Router()
const Coin = require('../models/coin')

coinRouter.get('/', (request, response) => {
    Coin.find({}).then(coin => {
        response.json(coin)
    })
})

coinRouter.post('/', (request, response, next) => {
    const body = request.body

    const coin = new Coin({
        userId: body.userId,
        name: body.name,
        target: body.target,
        threshold: body.threshold,
        reached: body.reached
    })

    coin.save()
        .then(savedCoin => {
            response.json(savedCoin)
        })
        .catch(error => next(error))
})

coinRouter.delete('/:id', (request, response, next) => {
    Coin.findByIdAndRemove(request.params.id)
        .then(() => {
            response.status(204).end()
        })
        .catch(error => next(error))
})

module.exports = coinRouter
const gamblingService = require('../services/gamblingService.js')

const win = (bet) => {
    const n = Math.floor(Math.random() * 20) + 1

    if(n === 10 && bet === "mid") return true
    if(n < 10 && bet === "down") return true
    if(n > 10 && bet === "up") return true

    return false
}

const reward = async ({userId, coins}, bet, betCoins, win) => {
    if (!win) {
        coins -= betCoins
        await gamblingService.updateUserCoins({userId, coins})
    }
    if (win) {
        if (bet === "mid") {
            coins += betCoins * 5
            await gamblingService.updateUserCoins({userId, coins})
        }
        else {
            coins += betCoins * 2
            await gamblingService.updateUserCoins({userId, coins})
        }
    }
}

const ensureUser = async (userId) => {
    const data = await gamblingService.getGamblingPlayer(userId)
    if (!data) await gamblingService.postNewPlayer({userId})
}


module.exports = {
    win,
    reward,
    ensureUser
}
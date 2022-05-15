const gamblingService = require('../services/gamblingservice');

/**
 * Gestiona los eventos del game
 * @module handlers/game
*/

/**
 * Evalua si el jugador ha ganado la partida
 * @param {String} bet Direccion de la apuesta
 * @returns {Boolean} Resultado de la evaluación
 */
const win = (bet) => {
  const n = Math.floor(Math.random() * 20) + 1;

  if (n === 10 && bet === 'mid') return true;
  if (n < 10 && bet === 'down') return true;
  if (n > 10 && bet === 'up') return true;

  return false;
};

/**
 * Asigna las recompensa adecuada a la apuesta
 * @param {Player} player Objeto jugador
 * @param {String} bet Direccion de la apuesta
 * @param {Number} betCoins Cantidad de la apuesta
 * @param {Boolean} win Resultado de la apuesta
 * @returns {void}
 */
const reward = async ({ userId, coins }, bet, betCoins, win) => {
  if (!win) {
    coins -= betCoins;
    await gamblingService.updateUserCoins({ userId, coins });
  }
  if (win) {
    if (bet === 'mid') {
      coins += betCoins * 4;
      await gamblingService.updateUserCoins({ userId, coins });
    }
    else {
      coins += betCoins;
      await gamblingService.updateUserCoins({ userId, coins });
    }
  }
};

/**
 * Asegura al usuario dentro de la basa de datos
 * @param {String} userId Id del Usuario de Discord
 */
const ensureUser = async (userId) => {
  const data = await gamblingService.getGamblingPlayer(userId);
  if (!data) await gamblingService.postNewPlayer(userId);
};


module.exports = {
  win,
  reward,
  ensureUser
};
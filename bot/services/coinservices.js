const axios = require('axios');

const getCriptoCurrency = async (coin) =>{
    const res = await axios({
        method: 'GET',
        url: 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd'
    })
    console.log(res.data.find(el => el.id.includes(coin)));
    return res.data.find(el => el.id.includes(coin))
}

module.exports = {
    getCriptoCurrency: getCriptoCurrency
}
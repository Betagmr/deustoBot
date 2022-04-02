const axios = require('axios');

const getCriptoCurrency = async (coin) =>{
    const res = await axios({
        method: 'GET',
        url: 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd'
    })
    //console.log(res.data.find(el => el.id.includes(coin)));
    return res.data.find(el => el.id.includes(coin))
}

const getCriptoList = async (userId) =>{
    const res = await axios({
        method: 'GET',
        url: 'http://localhost:3001/api/coins/'
    })
    //console.log(res.data.find(el => el.id.includes(coin)));
    return res.data.filter(el => el.userId.includes(userId))
}

const postCoin = async (coin) =>{
    try{
        await axios({
            method: 'POST',
            url: 'http://localhost:3001/api/coins/',
            data: coin
        })
        console.log("realizada peticion POST");
    }catch(e){
        console.log(e);
    }
}
const deleteCoin = async (id) =>{
    try{
        await axios({
            method: 'DELETE',
            url: `http://localhost:3001/api/coins/${id}`,
        })
        console.log("realizada peticion DELETE");
    }catch(e){
        console.log(e);
    }
}



module.exports = {
    getCriptoCurrency: getCriptoCurrency,
    getCriptoList: getCriptoList,
    postCoin: postCoin,
    deleteCoin: deleteCoin
}
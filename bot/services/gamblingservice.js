const axios = require('axios');

const base_url = 'http://localhost:3001/api/gambling/'

const getGamblingPlayer = async (userId) =>{
    const res = await axios({
        method: 'GET',
        url: base_url
    })

    return res.data.find(el => el.userId.includes(userId))
}

const getGamblingPlayers = async () =>{
    const res = await axios({
        method: 'GET',
        url: base_url
    })

    return res.data
}

const postNewPlayer = async ({userId, coins = 0}) =>{
    try{
        await axios({
            method: 'POST',
            url: base_url,
            data: {
                userId,
                coins
            }
        })
    }catch(e){
        console.log(e);
    }
}

const updateUserCoins = async ({userId, coins}) =>{
    try{
        await axios({
            method: 'PUT',
            url: base_url + `/` + userId,
            data: {
                coins
            }
        })
    }catch(e){
        console.log(e);
    }
}


module.exports = {
    getGamblingPlayer,
    getGamblingPlayers,
    postNewPlayer,
    updateUserCoins
}
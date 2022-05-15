const axios = require('axios');
const config = require('../settings/config');

const base_url = `${config.BASE_URL}/api/coins`;

const getCriptoCurrency = async (coin) => {
  const res = await axios({
    method: 'GET',
    url: 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd'
  });
  return res.data.find(el => el.id.includes(coin));
};

const getCriptoList = async (userId) => {
  const res = await axios({
    method: 'GET',
    url: base_url
  });
  return res.data.filter(el => el.userId.includes(userId));
};

const postCoin = async (coin) => {
  try{
    await axios({
      method: 'POST',
      url: base_url,
      data: coin
    });
    console.log('realizada peticion POST');
  }catch(e){
    console.log(e);
  }
};
const deleteCoin = async (id) => {
  try{
    await axios({
      method: 'DELETE',
      url: `${base_url}/${id}`,
    });
    console.log('realizada peticion DELETE');
  }catch(e){
    console.log(e);
  }
};


module.exports = {
  getCriptoCurrency: getCriptoCurrency,
  getCriptoList: getCriptoList,
  postCoin: postCoin,
  deleteCoin: deleteCoin
};
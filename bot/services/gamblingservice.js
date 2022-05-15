const axios = require('axios');
const config = require('../settings/config');

const base_url = `${config.BASE_URL}/api/gambling`;

const getGamblingPlayer = async (userId) => {
  const res = await axios({
    method: 'GET',
    url: base_url
  });

  return res.data.find(el => el.userId.includes(userId));
};

const getGamblingPlayers = async () => {
  const res = await axios({
    method: 'GET',
    url: base_url
  });

  return res.data;
};

const getRewardedPlayers = async () => {
  const res = await axios({
    method: 'GET',
    url: base_url
  });

  return res.data.filter(el => el.reward === true);
};

const postNewPlayer = async (userId) => {
  try{
    await axios({
      method: 'POST',
      url: base_url,
      data: {
        userId
      }
    });
  }catch(e){
    console.log(e);
  }
};

const updateUserCoins = async ({ userId, coins }) => {
  try{
    await axios({
      method: 'PUT',
      url: `${base_url}/${userId}`,
      data: {
        coins,
      }
    });
  }catch(e){
    console.log(e);
  }
};

const updateUserReward = async ({ userId, reward }) => {
  try{
    await axios({
      method: 'PUT',
      url: `${base_url}/${userId}`,
      data: {
        reward,
      }
    });
  }catch(e){
    console.log(e);
  }
};


module.exports = {
  getGamblingPlayer,
  getGamblingPlayers,
  getRewardedPlayers,
  postNewPlayer,
  updateUserCoins,
  updateUserReward
};
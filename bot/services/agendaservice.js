const axios = require('axios');

const postReminder = async (reminder) =>{
    try {
        const res = await axios({
            method: 'POST',
            url: 'http://localhost:3001/api/reminder',
            data: reminder
        
        })
        console.log("se ha enviado el objeto correctamente");
    } catch(error) {
        console.log(error);
    }
}

const getReminders = async (userId) =>{
    const res = await axios({
        method: 'GET',
        url: 'http://localhost:3001/api/reminder'
    })
    return res.data.filter(el => el.userId.includes(userId))
}

module.exports = {
    postReminder: postReminder,
    getReminders: getReminders
}
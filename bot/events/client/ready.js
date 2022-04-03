const mongoose = require('mongoose');
const config = require('../../settings/config.json');

module.exports = client => {
    console.log(`Sesion iniciada en ${client.user.tag}`.green)
}
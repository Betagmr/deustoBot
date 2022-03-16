const mongoose = require('mongoose');
const config = require('../../settings/config.json');

module.exports = client => {
    console.log(`Sesion iniciada en ${client.user.tag}`.green)

    //Nos conectamos a la base de datos
    mongoose.connect(config.mongodb, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }).then(() => {
        console.log(`Conectado a la base de datos de MONGODB!`.blue)
    }).catch((err) => {
        console.log(`☁ ERROR AL CONECTAR A LA BASE DE DATOS DE MONGODB`.red);
        //console.log(err)
    })

}
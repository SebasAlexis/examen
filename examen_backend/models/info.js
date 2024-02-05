const { Schema, model } = require('mongoose');

const infoSchema = new Schema({
    regulacion_id: String,
    regulacion: String,
    url: String,
    descripcion: String,
    tipo: String,
    institucion_emisora: String,
    registro_oficial_numero: String,
    registro_oficial_fecha: String,
    suscripcion: String,
    archivo: String,
    modificado: String
});

module.exports = model('Info',infoSchema);
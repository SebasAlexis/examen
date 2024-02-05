const mongoose = require('mongoose');

const infoSchema = new mongoose.Schema({
    url: String,
    tipo: String,
});

const Info = mongoose.model('Info', infoSchema);

module.exports = Info;
// DATABASE.JS
const fs = require('fs');
const mongoose = require('mongoose'); 
const URI = 'mongodb://127.0.0.1:27017/db_informacion';
const Info = require('../examen_backend/models/info');

const infoData = JSON.parse(fs.readFileSync('../examen-1/src/assets/info.json', 'utf-8'));

mongoose.connect(URI, { dbName: 'db_informacion' })
  .then(async db => {
    console.log('BD conectada')
  // Verifica si hay datos en la colección
  const count = await Info.countDocuments();
  if (count === 0) {
      // Si no hay datos, inserta los datos desde info.json
      await Info.insertMany(infoData);
      console.log('Datos de info.json guardados en la base de datos');
  }
})
  .catch(err => console.error(err));

module.exports = mongoose;


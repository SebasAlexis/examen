const express = require('express'); 
const app = express();
const cors = require('cors');
require('./database'); // Make sure the path is correct

app.use(cors());
app.use(express.json());
app.use('/api-user', require('./routes/server.routes.js'));

app.listen(3000, () => {
  console.log('Server corriendo en el puerto 3000');
});

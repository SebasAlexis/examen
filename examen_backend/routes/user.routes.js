// backend/routes/infoRoutes.js
const { Router } = require("express");
const router = Router();
const user = require("../controllers/users.controllers");

// Ruta para obtener datos de usuarios
//router.get("/", user.getUsers);
router.post("/registro", user.addUser);

//router.post('/ingreso',user.loginUser);
//router.get('/tareas',user.getTasks);
//router.get('/tareasprivadas',user.geTasksPrivate);

module.exports = router;
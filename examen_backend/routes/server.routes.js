// backend/routes/infoRoutes.js
const { Router } = require("express");
const router = Router();
const info = require('../controllers/info.controllers');

// Ruta para obtener toda la información
router.get('/', info.getAllInfo);

module.exports = router;
